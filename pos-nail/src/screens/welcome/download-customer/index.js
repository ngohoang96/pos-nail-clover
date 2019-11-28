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
                'http://pngimg.com/uploads/qr_code/qr_code_PNG2.png',
            }}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDownloadCus: {flex: 1, backgroundColor: 'white', padding: 5},
  txtDownloadCus: {fontSize: normalize(themes.H5), color: 'gray', marginLeft : 10},
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
