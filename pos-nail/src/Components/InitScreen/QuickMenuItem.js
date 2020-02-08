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
    height: ((Metrics.appWidth * 1.2) / 8.4) * 0.35,
    width: '100%',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 1,
    borderWidth: 0.5,
    borderColor: Colors.line,
  },
});

export default class QuickMenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.button,
          {borderLeftWidth: 1, ...this.props.style_button},
        ]}
        onPress={() => onPress()}>
        <TextCmp style={[styles.text]}>{this.props.lable}</TextCmp>
      </TouchableOpacity>
    );
  }
}
