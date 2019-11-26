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
export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.containerfx1}>
        <View style={styles.containerLogo}>
          <Image
            resizeMode="stretch"
            style={styles.logo}
            source={{
              uri: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/01/mastercard-new-logo-content-2019.jpg',
            }}></Image>
        </View>
        <View style={styles.containerLabel}>
          <TextCmp style={styles.label}>Welcome to Luna Nails and Spa</TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerfx1: {flex: 1, backgroundColor: 'white', flexDirection: 'row'},
  containerLogo: {
    flex: 0.6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {height: '85%', width: '50%' , backgroundColor : 'white'},
  containerLabel: {flex: 1, justifyContent: 'center'},
  label: {fontSize: normalize(13), color: 'gray'},
});
