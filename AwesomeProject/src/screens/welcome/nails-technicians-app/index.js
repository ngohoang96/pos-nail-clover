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
                'https://camo.githubusercontent.com/e12db4f7b6cdeb14ea928e01e306ac73a9fb70fa/68747470733a2f2f656e64726f69642e6e6c2f71722d636f64652f4c6966652532306973253230746f6f25323073686f7274253230746f253230626525323067656e65726174696e672532305152253230636f6465732e706e67',
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
    height: ((themes.height * 2) / 6.5) * 0.6,
    width: ((themes.height * 2) / 6.5) * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: '10%',
  },
  imageNailTech: {height: '100%', width: '100%', overflow: 'hidden'},
});
