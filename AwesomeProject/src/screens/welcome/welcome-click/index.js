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
import CustomerGuest from './customer/index';
import NailEmployee from './nails-employee/index';
import ReviewUs from './review-us/index';
export default class WelcomClick extends Component {
  render() {
    return (
      <View style={styles.containerClick}>
        <CustomerGuest></CustomerGuest>
        <NailEmployee></NailEmployee>
        <ReviewUs></ReviewUs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerClick: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
