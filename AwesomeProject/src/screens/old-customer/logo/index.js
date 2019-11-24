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
            uri: 'http://pngimg.com/uploads/google/google_PNG19644.png',
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
