import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Metrics, Colors, TextCmp} from '../../../../../../themes';

export default class BottomSelectTechnician extends Component {
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
    height: '10%',

    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 5,
    paddingVertical: 2,
  },
  btn: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.line,
    backgroundColor: '#fff',
    width: '35%',
    alignItems: 'center',
    backgroundColor: Colors.backgroundModal,
  },
  txt: {},
});
