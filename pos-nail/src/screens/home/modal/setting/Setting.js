import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Metrics, TextCmp} from '../../../../themes';
import {storeCode} from '../../../../values/AppValue';

export default class SettingModal extends Component {
  render() {
    const {visible, onClose} = this.props;
    return (
      <Modal
        visible={visible}
        onRequestClose={() => onClose()}
        transparent={true}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.top}>
              <TextCmp>Setting</TextCmp>
              <TouchableOpacity onPress={() => onClose()}>
                <TextCmp>X</TextCmp>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90%',
                width: '100%',
              }}>
              <TextCmp>Store Code : {storeCode}</TextCmp>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  wrapper: {
    width: (Metrics.appWidth * 30) / 100,
    height: (Metrics.appHeight * 30) / 100,
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
  btn: {
    height: 50,
    width: 150,
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  top: {
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 0.5,
  },
});
