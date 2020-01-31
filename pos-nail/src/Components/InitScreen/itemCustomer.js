import React, { Component } from 'react';
import { View } from 'react-native';
import { Metrics, TextCmp } from '../../themes';
import { normalize } from '../../themes/FontSize';


export default class ItemCustomer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          height: (Metrics.appWidth * 1.2 / 8.4) * 0.5, width: (Metrics.appWidth * 1.2 / 8.4),
          backgroundColor: this.props.index % 2 == 0 ? 'orange' : 'red', flex: 0
        }}>
        <View style={{ flex: 2, borderWidth: 1, borderColor: '#CECECE', justifyContent: 'center', alignItems: 'center' }}>
          <TextCmp style={{ fontSize: normalize(5), color: 'white', fontWeight: 'bold' }}>Jennifer Tran</TextCmp>
        </View>
        <View style={{ flex: 1, borderWidth: 1, borderColor: '#CECECE', justifyContent: 'center', alignItems: 'center' }}>
          <TextCmp style={{ fontSize: normalize(3.5), color: 'white', fontWeight: 'bold' }}>View detail</TextCmp>
        </View>


      </View>
    );
  }
}
