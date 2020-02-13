import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {TextCmp, Colors, Metrics} from '../../../../themes';
import {normalize} from '../../../../themes/FontSize';
import themes from '../../../../config/themes';
export default class GridItem extends Component {
  // shouldComponentUpdate({ item: newItem }) {
  //     return newItem.isSelected != this.props.item.isSelected
  // }
  render() {
    const {item, index, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.containerTouchItem,
          {
            backgroundColor: item.isSelected ? 'pink' : Colors.bgGray,
          },
        ]}
        onPress={() => onPress()}>
        <TextCmp style={styles.txtCenter}>{item.name}</TextCmp>
        <TextCmp
          style={{
            fontSize: normalize(4),
            marginTop: 4,
          }}>
          Price: {item.price}$
        </TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  txtCenter: {
    textAlign: 'center',
    fontSize: normalize(4),
    fontWeight: 'bold',
  },
  containerTouchItem: {
    width: '31%',
    backgroundColor: Colors.bgGray,
    // borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '1%',
    marginVertical: 4,
    minHeight: ((Metrics.appWidth * 1.2) / 8.4) * 0.35,
    borderRadius: 5,
    elevation: 4,
  },
});
