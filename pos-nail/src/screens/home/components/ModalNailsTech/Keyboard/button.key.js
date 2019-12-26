import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import {TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';

export default class buttonkey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {text, backgroundColor, borderColor, textStyle, flex} = this.props;
    return (
        <TouchableOpacity
          style={{
            flex: flex || 2,
            backgroundColor,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor,
          }}>
          <TextCmp
            style={[
              {
                color: 'white',
                fontSize: normalize(6),
                fontWeight: 'normal',
              },
              {...textStyle},
            ]}>
            {text}
          </TextCmp>
        </TouchableOpacity>
    );
  }
}
