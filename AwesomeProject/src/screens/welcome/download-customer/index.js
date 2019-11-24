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
export default class DownloadCustomer extends Component {
  render() {
    return (
      <View style={styles.containerDownloadCus}>
        <TextCmp style={styles.txtDownloadCus}>
          Download Customer Reward APP
        </TextCmp>
        <View style={styles.containerImagedownload}>
          <Image
            resizeMode="stretch"
            style={styles.imageDownload}
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
  containerDownloadCus: {flex: 1, backgroundColor: 'white', padding: 5},
  txtDownloadCus: {fontSize: 18, color: 'gray', marginLeft : 10},
  containerImagedownload: {
    height: ((themes.height * 2) / 6.5) * 0.7,
    width: ((themes.height * 2) / 6.5) * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginTop: 5,
  },
  imageDownload: {height: '100%', width: '100%', overflow: 'hidden'},
});
