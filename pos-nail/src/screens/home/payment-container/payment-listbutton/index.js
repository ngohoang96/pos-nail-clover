import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';

import {Button} from '../../../../Components/InitScreen/Button';
import {TextCmp} from '../../../../themes';
export default class PaymentListButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{marginTop: 1, flex: 4}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            // margin: 3,
            marginVertical: 3,
            // flex: 1,
          }}>
          <Button
            Textstyle={{color: 'black'}}
            lable={'$64.00'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'$65.00'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'$70.00'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Custom Price'}
            bg={'#EEEEEE'}></Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',

            marginVertical: 3,
          }}>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Cancel'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Gift Card'}
            bg={'#6697EA'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Charge'}
            bg={'#FD6CB4'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Cash'}
            bg={'#FDA428'}></Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            // flex: 1,

            borderTopColor: 'gray',
            // margin: 3,
          }}>
          <TouchableOpacity
            style={{
              width: '47%',
              height: 30,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(3.5),
              }}>
              Cancel
            </TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '47%',
              height: 30,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(3.5),
              }}>
              Service
            </TextCmp>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
