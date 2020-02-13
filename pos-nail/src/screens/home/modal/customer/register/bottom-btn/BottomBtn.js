import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {TextCmp, Colors} from '../../../../../../themes';

export default class BottomBtn extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const {onClose, addCustomerCheckin} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => onClose(false)}>
          <TextCmp style={styles.txt}>Close</TextCmp>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => addCustomerCheckin(1)}>
          <TextCmp style={styles.txt}>Sign In</TextCmp>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  btn: {
    width: '49%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.line,
    backgroundColor: '#fff',
  },
  right_view: {
    flexDirection: 'row',
  },
  txt: {
    // color: '#fff',
  },
});
