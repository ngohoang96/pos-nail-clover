import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {TextCmp, Colors} from '../../../../themes';
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
    width: '32.8%',
    backgroundColor: Colors.bgGray,
    // borderRadius: 3,
    borderWidth: 0.5,
    borderColor: Colors.line,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
});
