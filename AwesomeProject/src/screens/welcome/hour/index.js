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
export default class Hour extends Component {
  render() {
    return (
      <View style={styles.containerHour}>
        <TextCmp style={styles.txtHour}>1:30 pm</TextCmp>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHour: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txtHour: {color: 'black', fontSize: 24},
});
