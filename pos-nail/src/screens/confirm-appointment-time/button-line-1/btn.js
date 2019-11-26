import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import themes from '../../../config/themes';
import {Colors} from '../../../themes';
import {normalize} from '../../../utils/FontSize';
import {TextCmp} from '../../../common-components/index';

export default (props = {}) => {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.7}
        {...props}
        style={[styles.btn, props.style]}>
          <TextCmp style={styles.txt}>{props.label}</TextCmp>
      </TouchableOpacity>
   
    );
}

const styles = StyleSheet.create({
btn : {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
} , 
txt : {color: 'white', fontSize: normalize(10)}
});
