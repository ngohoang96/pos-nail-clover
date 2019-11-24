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

export default class Label extends Component {
  render() {
    return (
      <View
        style={{
          flex: 2,
          backgroundColor: 'red',
          marginHorizontal: 10,
        }}>
        <InputPhone></InputPhone>
        <View
          style={{
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style = {{flex : 1}}></View>
          <View style={{flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5
              }}></TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', flex: 1 , marginTop : 5}}>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5  
              }}></TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flex: 1 , marginTop : 5}}>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5
              }}></TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flex: 1 , marginTop : 5}}>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '15%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft : 5
              }}></TouchableOpacity>
          </View>
            <View style = {{flex : 1}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
