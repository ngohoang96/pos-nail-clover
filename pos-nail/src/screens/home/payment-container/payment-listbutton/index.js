import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { normalize } from '../../../../themes/FontSize';

import { Button } from '../../../../Components/InitScreen/Button';
import { TextCmp, Colors } from '../../../../themes';

export default class PaymentListButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginTop: 3, flex: 4, backgroundColor: '#F0F0F0' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 3,
          }}>
          <Button Textstyle={{ color: 'black' }} lable={'$64.00'} bg={'white'}
            containerStyle={{ backgroundColor: Colors.bgGray }} />
          <Button Textstyle={{ color: 'black' }} lable={'$65.00'} bg={'white'}
            containerStyle={{ backgroundColor: Colors.bgGray }} />
          <Button Textstyle={{ color: 'black' }} lable={'$70.00'} bg={'white'}
            containerStyle={{ backgroundColor: Colors.bgGray }} />
          <Button
            containerStyle={{ backgroundColor: Colors.bgGray }}
            Textstyle={{ color: 'black' }}
            lable={'Custom Price'}
            bg={'#EEEEEE'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',

            marginVertical: 3,
          }}>
          <Button
            containerStyle={{ height: 40, backgroundColor: Colors.bgGray }}
            Textstyle={{ color: 'black' }}
            lable={'CANCEL'}
            bg={'white'}></Button>
          <Button
            containerStyle={{ height: 40, backgroundColor: Colors.bgGray }}
            Textstyle={{ color: 'black' }}
            lable={'GIFT'}></Button>
          <Button
            containerStyle={{ height: 40 }}
            Textstyle={{ color: 'black' }}
            lable={'CHARGE'}
            bg={'red'}></Button>
          <Button
            containerStyle={{ height: 40 }}
            Textstyle={{ color: 'black' }}
            lable={'CASH'}
            bg={'green'}></Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopColor: 'gray', backgroundColor: Colors.bgGray
          }}>
          <TouchableOpacity
            style={{
              width: '49%',
              height: 35,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center', backgroundColor: Colors.bgGray
            }}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(3.5),
                fontWeight: 'bold'
              }}>
              Cancel Service
            </TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '49%',
              height: 35,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center', backgroundColor: Colors.bgGray
            }}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(3.5),
                fontWeight: 'bold'
              }}>
              Service Now
            </TextCmp>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
