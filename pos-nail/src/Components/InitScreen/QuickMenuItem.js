import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../themes/FontSize';
import {TextCmp, Metrics} from '../../themes';

const styles = StyleSheet.create({
  text: {
    // color: 'black',
    fontSize: normalize(3),
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    height: ((Metrics.appWidth * 1.2) / 8.4) * 0.35,
    width: '100%',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 1,
    borderTopColor: '#383E44',
    borderTopWidth: 1,
    borderRightColor: '#383E44',
    borderRightWidth: 1,
    borderBottomColor: '#383E44',
    borderBottomWidth: 1,
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
