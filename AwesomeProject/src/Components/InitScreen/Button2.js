import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../Utils/scales'
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    borderRadius: 3,
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 5,
    borderTopColor: '#383E44',
    borderTopWidth: 1,
    borderRightColor: '#383E44',
    borderRightWidth: 1,
    borderBottomColor: '#383E44',
    borderBottomWidth: 1,
  },
});

export default class Button2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {borderLeftWidth: 4, ... this.props.style_button},
        ]}>
        <Text style={[styles.text, this.props.Textstyle , {fontSize : normalize(4)}]}>
          {this.props.lable}
        </Text>
      </TouchableOpacity>
    );
  }
}
