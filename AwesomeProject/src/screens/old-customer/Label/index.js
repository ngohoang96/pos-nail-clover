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
      <View style={styles.containerLabel}>
        <View style={{alignItems: 'center'}}>
          <TextCmp style={{fontSize: 24}}>
            Please type in your phone number!
          </TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLabel: {flex: 0.5, backgroundColor: 'white'},
});
