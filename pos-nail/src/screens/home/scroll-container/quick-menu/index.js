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
    let params = {...service, quantity: 1};
    this.props.selectService(params);
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
                    backgroundColor: Colors.bgGray,
                    borderLeftColor: item.code,
                    borderLeftWidth: 4,
                    elevation: 4,
                  }}
                  lable={item.service}
                  code={item.code}
                  textstyles={{fontWeight: '500'}}
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
const mapDispatchToProps = (dispatch, {listTechnicianSelected}) => {
  const selectService = service => {
    if (listTechnicianSelected.length > 0) {
      dispatch(actions.home.updateServiceTechnician(service));
    } else {
      dispatch(actions.home.updateSelectedService(service));
    }
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
    // borderRightWidth: 0.5,
    // borderLeftWidth: 0.5,
    // borderColor: Colors.line,
    backgroundColor: Colors.orange,
  },
  containerTxt: {
    height: '7%',
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
