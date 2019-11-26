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
import {demoImg} from '../../../assets';
export default class NailsTechnicianApp extends Component {
  render() {
    return (
      <View style={styles.NailsTechnicianApp}>
        <TextCmp style={styles.txtnailsTech}>Nails Technicians APP</TextCmp>
        <View style={styles.containerImageNails}>
          <Image
            source={{
              uri: `https://facebook.github.io/react/logo-og.png`,
            }}
            // source={demoImg.img}
            resizeMode="contain"
            style={{width: 100, height: 100}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NailsTechnicianApp: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'flex-end',
  },
  txtnailsTech: {
    fontSize: normalize(8),
    color: 'gray',
    textAlign: 'right',
    marginRight: 10,
  },
  containerImageNails: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: 'red',
    // marginRight: '10%',
  },
  imageNailTech: {width: 50, height: 50},
});
