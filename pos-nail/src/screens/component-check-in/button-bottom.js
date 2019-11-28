import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import themes from '../../config/themes';
import {Colors} from '../../themes';
import {normalize} from '../../utils/FontSize';
import {TextCmp} from '../../common-components/index';

export default (props = {}) => {
  return (
    <View style={[styles.container, props.containerStyles]}>
      <TouchableOpacity onPress={props.onPressBtn1} style={[styles.btn]}>
        <TextCmp style={styles.txt}>{props.txtBtn1}</TextCmp>
      </TouchableOpacity>
      {props.txtBtn2 ? (
        <TouchableOpacity onPress={props.onPressBtn2} style={[styles.btn]}>
          <TextCmp style={styles.txt}>{props.txtBtn2}</TextCmp>
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  btn: {
    width: '15%',
    height: '50%',
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {color: 'white', fontSize: normalize(themes.H8)},
});
