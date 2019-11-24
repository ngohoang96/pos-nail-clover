import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import themes from '../../../config/themes';
import {Colors} from '../../../themes';
import {normalize} from '../../../utils/FontSize';
import {TextCmp} from '../../../common-components/index';

export default (props = {}) => {
    return (
      <TouchableOpacity
        onPress={props.onPressBack}
        activeOpacity={0.7}
        {...props}
        style={[styles.btnBack, props.style]}>
        <TextCmp style={styles.txtBack}>{props.label}</TextCmp>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', justifyContent: 'center'},
  txtBack: {
    color: 'white',
    fontSize: 18,
  },
  btnBack: {
    height: '85%',
    width: '15%',
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 20
  },
});
