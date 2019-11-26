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
      <View style={styles.containerReviewUs}>
        <TextCmp style={styles.txtReviewUs}>Review Us</TextCmp>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerReviewUs: {
    height: '20%',
    width: '50%',
    backgroundColor: '#F48210',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtReviewUs: {fontSize: normalize(8), color: 'white'},
});
