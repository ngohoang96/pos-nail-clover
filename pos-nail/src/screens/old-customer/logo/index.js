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

export default class LogoOld extends Component {
  render() {
    return (
      <View style={styles.containerImage}>
        <Image
          resizeMode="stretch"
          style={styles.imagelogo}
          source={{
            uri: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/01/mastercard-new-logo-content-2019.jpg',
          }}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingLeft: '10%',
    
  },
  imagelogo: {
    height: '70%',
    width: '15%',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
