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
    <View {...props} style={[styles.containerLabel, props.containerStyle]}>
        <TextCmp style={[styles.txt, props.labelStyle]}>{props.label}</TextCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  containerLabel: {flex: 1, backgroundColor: 'white'},
  txt: {fontSize: 24},
});
