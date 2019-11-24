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

export default class Label extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInputText}>
          <TextInput style={styles.inp}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInputText: {
    width: '70%',
    height: '100%',
    borderWidth: 1,
    borderColor: Colors.darkBlue,
  },
  inp: {flex: 1},
});
