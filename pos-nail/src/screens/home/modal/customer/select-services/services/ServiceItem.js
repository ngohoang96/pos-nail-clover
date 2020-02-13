import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {normalize} from '../../../../../../themes/FontSize';
import {TextCmp, Metrics, Colors} from '../../../../../../themes';
import {Logg} from '../../../../../../utils';

export default class ServiceItem extends Component {
  shouldComponentUpdate({item: newItem, isActive: newIsActive}) {
    return newItem !== this.props.item || newIsActive !== this.props.isActive;
  }
  render() {
    const {item, onPress, isActive} = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.containerTouchItem,
          {
            backgroundColor: isActive ? 'pink' : '#fff',
          },
        ]}
        onPress={() => onPress(item)}>
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
    backgroundColor: '#fff',
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
