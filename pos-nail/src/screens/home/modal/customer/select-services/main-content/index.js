import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';
import {Logg} from '../../../../../../utils';
import {actions, selectors} from '../../../../../../stores';
// import {TextCmp} from '../../../../../../themes';
// import {normalize} from '../../../../../../themes/FontSize';
// import {Logg} from '../../../../../../utils';
// import {actions, selectors} from '../../../../../../stores';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const {getListCusService, onPress} = this.props;

    // let tempArr = getListCusService.filter(x => x.isSelected === true);
    // Logg.info('tempArr xx', tempArr);
    // let tmp = '';
    // for (let i = 0; i < getListCusService.length; ++i) {
    //   if (getListCusService[i].isSelected)
    //     tmp = tmp + getListCusService[i].name + ' ,';
    // }
    return (
      <View style={styles.container}>
        <TextCmp style={styles.txtTitle}>Please Select Perfer Services</TextCmp>
        <TouchableOpacity
          numberOfLines={1}
          activeOpacity={0.9}
          onPress={() => onPress()}
          style={styles.btn}>
          <TextCmp
            numberOfLines={1}
            style={{
              fontSize: normalize(5),
              alignContent: 'center',
              textAlignVertical: 'center',
              marginLeft: 2,
            }}>
            tmp
          </TextCmp>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getListCusService: selectors.cus.listService(state),
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: '5%',
  },
  txtTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  btn: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 5,
    height: '50%',
    flexDirection: 'row',
  },
});
