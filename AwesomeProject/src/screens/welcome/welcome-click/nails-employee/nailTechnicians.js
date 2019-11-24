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
import themes from '../../../../config/themes';
import {Colors} from '../../../../themes';
import {normalize} from '../../../../utils/FontSize';
import {TextCmp} from '../../../../common-components/index';
export default class NailTechnicians extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Navigation.push('NewCustomerScreen', {
            component: {
              name: 'YourServiceScreen',
              options: {},
              passProps: {},
            },
          });
        }}
        style={styles.containerNailTech}>
        <TextCmp style={styles.txtNailTech}>Nails Technicians</TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerNailTech: {
    flex: 1,
    backgroundColor: '#1A55A4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNailTech: {fontSize: 24, color: 'white'},
});
