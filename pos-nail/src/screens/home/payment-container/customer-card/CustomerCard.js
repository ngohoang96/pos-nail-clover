import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {TextCmp} from '../../../../themes';
import {styles} from '../styles';
import {homeIcon} from '../../../../assets';

export default class CustomerCard extends Component {
  render() {
    const {selectedCustomer, unSelectedCustomer} = this.props;
    return (
      <View style={[styles.wrappername, {backgroundColor: '#21C0FD'}]}>
        <TextCmp>Customer : {selectedCustomer.name}</TextCmp>
        <TouchableOpacity
          style={styles.btn_remove}
          onPress={unSelectedCustomer}>
          <Image source={homeIcon.delete} style={{width: 15, height: 15}} />
        </TouchableOpacity>
      </View>
    );
  }
}
