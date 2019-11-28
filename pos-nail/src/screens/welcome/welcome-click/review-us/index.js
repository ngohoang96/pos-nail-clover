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
import {TextCmp} from '../../../../common-components/index';
export default class Customer extends Component {
  render() {
    return (
      <TouchableOpacity onPress = {()=>{alert(themes.height + " so sánh " + themes.width)}} style={styles.containerReviewUs}>
        <TextCmp style={styles.txtReviewUs}>Review Us</TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerReviewUs: {
    height: '20%',
    width: '50%',
    backgroundColor: '#F48210',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtReviewUs: {fontSize: normalize(themes.H8), color: 'white'},
});
