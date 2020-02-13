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
        <View style={styles.right_view}>
          <TouchableOpacity style={[styles.btn, {marginHorizontal: 10}]}>
            <TextCmp style={styles.txt}>Add New</TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => addCustomerCheckin(1)}>
            <TextCmp style={styles.txt}>Add And CheckIn</TextCmp>
          </TouchableOpacity>
        </View>
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
    padding: 15,
    borderWidth: 1,
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
