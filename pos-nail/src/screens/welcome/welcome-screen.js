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
import {TextCmp} from '../../common-components/index';

import WelcomeLogoLabel from './welcome-logo-label/index';
import WelcomeHour from './hour/index';
import WelcomClick from './welcome-click/index';
import DownloadCustomer from './download-customer/index';
import NailsTechniciansApp from './nails-technicians-app/index';
import CheckInList from './check-in-list/index';
// import { normalize } from '../../utils/FontSize';
import { normalize } from '../../utils/FontSize';
export default class WelcomeScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.containerWelcomeScreen}>
        <WelcomeHour/>
        <WelcomeLogoLabel/>
        <WelcomClick/>
        <View style={styles.containerDownload}>
          <DownloadCustomer/>
          <CheckInList/>
          <NailsTechniciansApp/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerDownload: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  containerWelcomeScreen: {flex: 1, backgroundColor: 'white'},
});
