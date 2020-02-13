import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextCmp, Metrics} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';
// import { TextCmp, Metrics } from '../../../../../../../../themes';
// import { normalize } from '../../../../../../../../themes/FontSize';

export default class itemServicesCustomer extends Component {
  render() {
    const {item, onPress, mCatName} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        activeOpacity={0.5}
        key={item.id + ''}
        style={[
          styles.containerItemLeftContent,
          {
            backgroundColor: item.catname === mCatName ? '#CAE5E8' : '#fff',
          },
        ]}>
        <View style={styles.VContentLeft}></View>
        <TextCmp style={styles.txtBoldNO5}>{item.catname + ''}</TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerItemLeftContent: {
    width: '100%',
    minHeight: (Metrics.appHeight * 1) / 12,
    // marginHorizontal: 5,
    // marginVertical: 5,
    marginTop: 3,
    borderRightWidth: 1,
    borderRightColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txtBoldNO5: {
    fontSize: normalize(5),
    fontWeight: 'bold',
  },
  VContentLeft: {
    height: '100%',
    width: 10,
    backgroundColor:
      '#' + (Math.random().toString(16) + '000000').substring(2, 8),
    left: 0,
    position: 'absolute',
  },
});
