import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import themes from '../../config/themes';
import { normalize } from '../../themes/FontSize';

import { testsIcons } from '../../assets'
import { TextCmp } from '../../themes';
export default class ItemService extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center'
          }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <TextCmp style={{
              fontSize: normalize(3)
            }}>Organic</TextCmp>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextCmp style={{
              fontSize: normalize(3)
            }}>Rejuventation</TextCmp>
          </View>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Image
              resizeMethod="scale"
              source={testsIcons.trashIcon}
              style={{
                width: normalize(3),
                height: normalize(3),
                tintColor: 'gray',
              }}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnName}>
          <TouchableOpacity style={styles.btnName}>
            <TextCmp style={styles.txtName}>{this.props.name}</TextCmp>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.8 }}>
          <TextCmp style={{ marginLeft: 1 }}>Guest x1</TextCmp>
        </View>
        <View style={styles.containerTp}>
          <TextInput style={styles.styInput}></TextInput>
          <TextInput style={styles.styInput}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnName: {
    backgroundColor: '#0073B7',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    paddingVertical: 3,
    marginLeft: 1,
  },
  containerTp: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  containerBtnName: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(3)
  },
  styInput: {
    width: '48%',
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    paddingVertical: -10,
    height: '100%',
    fontSize: normalize(3),
  },
});
