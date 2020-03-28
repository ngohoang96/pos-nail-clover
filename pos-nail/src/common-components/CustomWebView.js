import React, {Component} from 'react';
import {Modal, View, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {Metrics, TextCmp} from '../themes';
import {Logg} from '../utils';
let modalWidth = (Metrics.appWidth * 70) / 100;
let modalHeight = (Metrics.appWidth * 70) / 100;
export default class CustomWebView extends Component {
  render() {
    const {uri, isShow, onClose, title} = this.props;
    Logg.info('uri web view', uri);
    return (
      <Modal visible={isShow} onRequestClose={onClose} transparent={true}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <TextCmp>{title}</TextCmp>
              <TouchableOpacity onPress={() => onClose()}>
                <TextCmp>X</TextCmp>
              </TouchableOpacity>
            </View>
            <View style={{width: modalWidth, height: '90%'}}>
              <WebView source={{uri: uri}} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  wrapper: {
    width: (Metrics.appWidth * 70) / 100,
    height: (Metrics.appHeight * 70) / 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 5,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    borderRadius: 5,
    elevation: 6,
    backgroundColor: '#fff',
  },
  header: {
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 0.5,
  },
};
