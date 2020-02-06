import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';

import Button2 from '../../../../Components/InitScreen/Button2';
import {QUICK_MENU} from '../../../../Components/InitScreen/mockData';
import {TextCmp, Colors} from '../../../../themes';
import {connect} from 'react-redux';
import {actions, selectors} from '../../../../stores';
import QuickMenuItem from '../../../../Components/InitScreen/QuickMenuItem';
import {ToastLib} from '../../../../utils';
class QuickMenu extends Component {
  constructor(props) {
    super(props);
  }

  selectService = service => {
    const {listTechnicianSelected} = this.props;
    if (listTechnicianSelected.length > 0) {
      this.props.selectService(service);
    } else {
      ToastLib.show('Please select Technician!');
    }
  };
  render() {
    return (
      <View style={styles.fx05MGH10}>
        <View style={styles.containerTxt}>
          <TextCmp style={styles.txt}>Quick Menu</TextCmp>
        </View>

        <View style={styles.containerScroll}>
          <ScrollView style={styles.width100}>
            {QUICK_MENU.map((item, index) => {
              return (
                <QuickMenuItem
                  key={index}
                  style_button={{
                    width: '100%',
                    height: 40,
                    paddingVertical: 10,
                    backgroundColor: Colors.bgGray,
                  }}
                  lable={item.service}
                  textstyles={{fontWeight: '300'}}
                  onPress={() => this.selectService(item)}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  listTechnicianSelected: selectors.home.selectListTechnicianSelected(state),
});
const mapDispatchToProps = dispatch => {
  const selectService = service => {
    dispatch(actions.home.updateServiceTechnician(service));
  };
  return {
    selectService,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuickMenu);

const styles = StyleSheet.create({
  fx05MGH10: {
    flex: 1,
    zIndex: -1,
    backgroundColor: Colors.orange,
  },
  containerTxt: {
    height: themes.height / 20,
    justifyContent: 'center',

    backgroundColor: Colors.bgGray,
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    alignItems: 'center',
    color: 'black',
    fontSize: normalize(5),
  },
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  width100: {width: '100%'},
});
