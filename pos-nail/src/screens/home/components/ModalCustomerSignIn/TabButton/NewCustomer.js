import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';

export default class CustomerSighIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {backgroundColor, textColor} = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(false)}
        style={{
          backgroundColor,
          height: '75%',
          width: '30%',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 5,
        }}>
        <TextCmp style={[{fontSize: normalize(6)}, {color: textColor}]}>
          New Customer
        </TextCmp>
      </TouchableOpacity>
    );
  }
}
