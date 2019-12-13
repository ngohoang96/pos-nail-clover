import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {items} from '../../../../Components/InitScreen/mockData';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import TextCmp from '../../../../themes/TextCmp';
import GridList from 'react-native-grid-list';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item, index}) => (
    <TouchableOpacity style={styles.containerTouchItem}>
      <TextCmp style={styles.txtCenter}>{item.code}</TextCmp>
      <TextCmp
        style={{
          fontSize: normalize(4),
        }}>
        index
      </TextCmp>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.fx1PR10}>
        <View style={styles.tmp}></View>
        <GridList
          showSeparator
          data={items}
          numColumns={2}
          renderItem={this.renderItem}
          separatorBorderWidth={5}
          showSeparator={true}></GridList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fx1PR10: {flex: 1, paddingRight: 10,
    zIndex : -1},
  tmp: {height: themes.height / 20, marginTop: 7},
  txtCenter: {textAlign: 'center', fontSize: normalize(3.5)},
  containerTouchItem: {
    width: '100%',
    minHeight : ((((themes.width * 3) / 3.9) * 1) / 3.8) * 0.2,
    backgroundColor: '#F4F4F4',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    paddingVertical : 5
  },
});
