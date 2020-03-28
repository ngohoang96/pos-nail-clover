import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import State from './State';
import City from './City';
import {TextCmp} from '../../../../../../themes';
export default class Line4 extends Component {
  render() {
    const {valueState, onChangeState, valueCity, onChangeCity} = this.props;
    return (
      <View style={styles.container}>
        <State
          valueState={valueState}
          onChangeState={e => onChangeState(e, 9)}
        />
        <City valueCity={valueCity} onChangeCity={e => onChangeCity(e, 10)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
