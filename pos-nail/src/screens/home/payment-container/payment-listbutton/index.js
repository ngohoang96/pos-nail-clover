import React, {Component, PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';

import {normalize} from '../../../../themes/FontSize';

import {Button} from '../../../../Components/InitScreen/Button';
import {TextCmp, Colors} from '../../../../themes';
import Logg from '../../../../utils/Logg';
export default class PaymentListButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cost1,
      cost2,
      cost3,
      onChangeCustomePrice,
      customePrice,
      onSubmitPayment,
      cancelService,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper_cash}>
          <Button
            Textstyle={{color: 'black'}}
            lable={`$ ` + cost1}
            bg={'white'}
            containerStyle={{backgroundColor: Colors.bgGray}}
            onPress={() => onSubmitPayment(cost1, 0)}
          />
          <Button
            Textstyle={{color: 'black'}}
            lable={`$ ` + cost2}
            bg={'white'}
            containerStyle={{backgroundColor: Colors.bgGray}}
            onPress={() => onSubmitPayment(cost2, 0)}
          />
          <Button
            Textstyle={{color: 'black'}}
            lable={`$ ` + cost3}
            bg={'white'}
            containerStyle={{backgroundColor: Colors.bgGray}}
            onPress={() => onSubmitPayment(cost3, 0)}
          />

          <TextInput
            style={{
              backgroundColor: Colors.bgGray,
              width: '24%',
              borderRadius: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              // flexWrap: 'wrap',
              padding: 0,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: normalize(4),
              borderWidth: 0.3,
              borderColor: '#383E44',
            }}
            keyboardType="numeric"
            value={customePrice !== 0 ? customePrice : ''}
            onChangeText={onChangeCustomePrice}
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
          <Button
            Textstyle={{color: 'black'}}
            lable={'CASH'}
            bg={'green'}
            onPress={() =>
              customePrice !== 0 ? onSubmitPayment(customePrice, 0) : null
            }
          />
        </View>
        <View style={styles.wrapper_service}>
          <TouchableOpacity
            onPress={cancelService}
            style={{
              width: '49%',
              height: '98%',
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 0.5,
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
              Cancel
            </TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSubmitPayment(cost1, 1)}
            style={{
              width: '49%',
              height: '98%',
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 0.5,
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
    backgroundColor: '#fff',
    height: '32%',
  },
});
