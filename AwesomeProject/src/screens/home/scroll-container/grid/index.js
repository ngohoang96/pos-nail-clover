import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import themes from '../../../../config/themes';
import ScaleTextLibrary from '../../../../utils/ScaleTextLibrary';
import {items} from '../../../../Components/InitScreen/mockData';

import GridList from 'react-native-grid-list';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item, index}) => (
    <TouchableOpacity style={styles.containerTouchItem}>
      <ScaleTextLibrary
        styl={styles.txtCenter}
        font={themes.H5}
        text={item.code}></ScaleTextLibrary>
      <ScaleTextLibrary font={themes.H5} text={index}></ScaleTextLibrary>
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
  fx1PR10: {flex: 1, paddingRight: 10},
  tmp: {height: themes.height / 20, marginTop: 7},
  txtCenter: {textAlign: 'center'},
  containerTouchItem: {
    width: '100%',
    height: ((((themes.width * 3) / 3.9) * 1) / 3.8) * 0.3,
    backgroundColor: '#F4F4F4',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
});
