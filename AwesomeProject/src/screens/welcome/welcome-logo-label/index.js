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
              uri: 'http://pngimg.com/uploads/google/google_PNG19644.png',
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
    flex: 0.7,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {height: '85%', width: '50%', overflow: 'hidden' , backgroundColor : 'white'},
  containerLabel: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  label: {fontSize: 18, color: 'gray'},
});
