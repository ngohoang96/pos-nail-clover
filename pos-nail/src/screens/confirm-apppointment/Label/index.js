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

export default class Label extends Component {
  render() {
    return (
      <View style={styles.containerImage}>
       <TextCmp style = {styles.txtLabel}>DO YOU HAVE APPOINTMENT?</TextCmp>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: '10%',
    justifyContent : 'center' , alignItems : 'center' 
  },
  imagelogo: {
    height: '70%',
    width: '15%',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  txtLabel : {
    color : 'black' , 
    fontSize : normalize(12)
  }
});
