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
export default class NailsTechnicianApp extends Component {
  render() {
    return (
      <View style={styles.NailsTechnicianApp}>
        <TextCmp style={styles.txtnailsTech}>Nails Technicians APP</TextCmp>
        <View style={styles.containerImageNails}>
          <Image
            resizeMode="stretch"
            style={styles.imageNailTech}
            source={{
              uri:
                'http://pngimg.com/uploads/qr_code/qr_code_PNG2.png',
            }}></Image>
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
  txtnailsTech: {fontSize: normalize(8), color: 'gray', textAlign: 'right',marginRight : 10},
  containerImageNails: {
    height: ((themes.height * 2) / 6.5) * 0.7,
    width: ((themes.height * 2) / 6.5) * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: '10%',
  },
  imageNailTech: {height: '100%', width: '100%', overflow: 'hidden'},
});
