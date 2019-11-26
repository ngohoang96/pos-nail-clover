import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import themes from '../../../../config/themes';
import {Colors} from '../../../../themes';
import {normalize} from '../../../../utils/FontSize';
import NailTech from './nailTechnicians';
import Employee from './employee';
import {TextCmp} from '../../../../common-components/index';
export default class NailEmployee extends Component {
  render() {
    return (
      <View style={styles.containerNailEmployee}>
        <NailTech></NailTech>
        <Employee></Employee>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerNailEmployee: {
    height: '20%',
    width: '50%',
    backgroundColor: 'white',
    marginTop: 10,
    flexDirection: 'row',
  },
});
