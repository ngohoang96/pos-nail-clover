import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {TextCmp, Metrics, Colors} from '../../../../themes';
import {normalize} from '../../../../themes/FontSize';
let buttons = [{name: 'Customer SignIn'}, {name: 'New Customer'}];
export default class TopTab extends Component {
  shouldComponentUpdate({index: newIndex}) {
    return newIndex !== this.props.index;
  }
  render() {
    const {index, onIndexChange} = this.props;
    return (
      <View style={styles.container}>
        {buttons.map((e, i) => (
          <TouchableOpacity
            style={index === i ? styles.btnActive : styles.btnInactive}
            key={i}
            onPress={() => onIndexChange(i)}>
            <TextCmp style={styles.txt}>{e.name}</TextCmp>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: (Metrics.appWidth * 70) / 100,
    height: (((Metrics.appHeight * 70) / 100) * 15) / 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.backgroundModal,
  },
  btnActive: {
    backgroundColor: '#F9EBD7',
    width: (((Metrics.appWidth * 70) / 100) * 30) / 100,
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,

    borderColor: '#E4BF93',
    margin: 10,
    borderRadius: 5,
  },
  btnInactive: {
    backgroundColor: '#FFFFFF',
    width: (((Metrics.appWidth * 70) / 100) * 30) / 100,
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D5D6D6',
    margin: 10,
    borderRadius: 5,
  },
  txt: {
    textAlign: 'center',
    fontSize: normalize(5),
    fontWeight: '500',
  },
});
