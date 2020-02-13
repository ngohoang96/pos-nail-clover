import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../themes/FontSize';
import {TextCmp, Metrics, Colors} from '../../themes';

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: normalize(6),
  },
  button: {
    backgroundColor: 'white',
    marginVertical: 2,
    height: ((Metrics.appWidth * 1.2) / 8.4) * 0.35 - 4,
    width: '96%',
    marginHorizontal: '2%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class QuickMenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress, code} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.button,
          {
            ...this.props.style_button,
          },
        ]}
        onPress={() => onPress()}>
        <TextCmp style={[styles.text]}>{this.props.lable}</TextCmp>
      </TouchableOpacity>
    );
  }
}
