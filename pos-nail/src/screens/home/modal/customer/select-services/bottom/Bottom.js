import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Metrics, Colors, TextCmp} from '../../../../../../themes';
export default class Bottom extends Component {
  render() {
    const {onPressClose, onPressFinish} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={onPressClose}>
          <TextCmp style={styles.txt}>Close</TextCmp>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onPressFinish}>
          <TextCmp style={styles.txt}>Finish</TextCmp>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '13%',
    borderTopWidth: 1,
    borderColor: Colors.line,
    backgroundColor: Colors.backgroundModal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  btn: {
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.line,
    backgroundColor: '#fff',
    width: '35%',
    alignItems: 'center',
  },
  txt: {},
});
