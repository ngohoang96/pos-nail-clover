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
import themes from '../../../config/themes';
import {Colors} from '../../../themes';
import {normalize} from '../../../utils/FontSize';
import {TextCmp} from '../../../common-components/index';

export default (props = {}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          resizeMode="stretch"
          style={styles.img}
          source={{
            uri: 'http://pngimg.com/uploads/google/google_PNG19644.png',
          }}></Image>
      </View>
      <View style={styles.ctxt}>
        <TextCmp style={styles.txt}>NEW CUSTOMER INFOR</TextCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueBack,
    flexDirection: 'row',
  },
  containerImg: {flex: 1, alignItems: 'center', justifyContent: 'flex-end'},
  img: {width: '60%', height: '80%'},
  ctxt: {
    flex: 2,
    backgroundColor: Colors.blueBack,
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  txt: {color: 'white', fontSize: 32},
});
