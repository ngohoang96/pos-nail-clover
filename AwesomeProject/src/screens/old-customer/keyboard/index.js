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
import InputPhone from '../InputPhone/index';
import Number from './button';
export default class Label extends Component {
  render() {
    return (
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          marginHorizontal: 10,
        }}>
        <InputPhone></InputPhone>
        <View
          style={{
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1}}></View>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Number text="1"></Number>
            <Number text="2" containerStyle = {{marginLeft : 5}}></Number>
            <Number text="3" containerStyle = {{marginLeft : 4}}></Number>
          </View>

          <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Number text="4"></Number>
            <Number text="5" containerStyle = {{marginLeft : 5}}></Number>
            <Number text="6" containerStyle = {{marginLeft : 4}}></Number>
          </View>
          <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Number text="7"></Number>
            <Number text="8" containerStyle = {{marginLeft : 5}}></Number>
            <Number text="9" containerStyle = {{marginLeft : 4}}></Number>
          </View>
          <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Number text="X"></Number>
            <Number text="0" containerStyle = {{marginLeft : 5}}></Number>
            <Number text="<<" containerStyle = {{marginLeft : 4}}></Number>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
