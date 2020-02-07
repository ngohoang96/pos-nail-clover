import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {normalize} from '../../../../themes/FontSize';

import {Button} from '../../../../Components/InitScreen/Button';
import {TextCmp, Colors} from '../../../../themes';

export default class PaymentListButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper_cash}>
          <Button
            Textstyle={{color: 'black'}}
            lable={'$64.00'}
            bg={'white'}
            containerStyle={{backgroundColor: Colors.bgGray}}
          />
          <Button
            Textstyle={{color: 'black'}}
            lable={'$65.00'}
            bg={'white'}
            containerStyle={{backgroundColor: Colors.bgGray}}
          />
          <Button
            Textstyle={{color: 'black'}}
            lable={'$70.00'}
            bg={'white'}
            containerStyle={{backgroundColor: Colors.bgGray}}
          />
          <Button
            containerStyle={{backgroundColor: Colors.bgGray}}
            Textstyle={{color: 'black'}}
            lable={'Custom Price'}
            bg={'#EEEEEE'}
          />
        </View>
        <View style={styles.wrapper_option}>
          <Button
            containerStyle={{backgroundColor: Colors.bgGray}}
            Textstyle={{color: 'black'}}
            lable={'OTHER'}
            bg={'white'}
          />
          <Button
            containerStyle={{backgroundColor: Colors.bgGray}}
            Textstyle={{color: 'black'}}
            lable={'GIFT'}
          />
          <Button Textstyle={{color: 'black'}} lable={'CHARGE'} bg={'red'} />
          <Button Textstyle={{color: 'black'}} lable={'CASH'} bg={'green'} />
        </View>
        <View style={styles.wrapper_service}>
          <TouchableOpacity
            style={{
              width: '49%',
              height: '100%',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.bgGray,
            }}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(3.5),
                fontWeight: 'bold',
              }}>
              Cancel Service
            </TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '49%',
              height: '100%',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.bgGray,
            }}>
            <TextCmp
              style={{
                color: '#383E44',
                fontSize: normalize(3.5),
                fontWeight: 'bold',
              }}>
              Service Now
            </TextCmp>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  wrapper_cash: {
    height: '32%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  wrapper_option: {
    height: '32%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  wrapper_service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'gray',
    backgroundColor: Colors.bgGray,
    height: '32%',
  },
});
