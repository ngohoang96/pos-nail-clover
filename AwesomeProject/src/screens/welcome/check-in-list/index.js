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
export default class CheckInList extends Component {
  render() {
    return (
      <View style={styles.containerCheckIn}>
        <View style={styles.containertxt}>
          <TextCmp style={styles.txtCheck}>Check in List</TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerCheckIn: {
    flex: 0.8,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  containertxt: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom : 20
  },
  txtCheck: {fontSize: 18, color: 'gray'},
});
