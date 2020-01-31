import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextCmp } from '../../../../themes';
import { normalize } from '../../../../themes/FontSize';
import themes from '../../../../config/themes';

export default class ItemGrid extends Component {
  // shouldComponentUpdate({ item: newItem }) {
  //     return newItem.isSelected != this.props.item.isSelected
  // }
  render() {
    const { item, index, onPress } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.containerTouchItem,
          {
            backgroundColor: item.isSelected ? 'pink' : '#F5F5F5',
          },
        ]}
        onPress={() => onPress()}>
        <TextCmp style={styles.txtCenter}>{item.name}</TextCmp>
        <TextCmp
          style={{
            fontSize: normalize(4)
          }}>
          Price: {item.price}$
        </TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  txtCenter: {
    textAlign: 'center', fontSize: normalize(4),
    fontWeight: 'bold'
  },
  containerTouchItem: {
    width: '32%',
    backgroundColor: '#F4F4F4',
    // borderRadius: 3,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    margin: 3,
  },
});
