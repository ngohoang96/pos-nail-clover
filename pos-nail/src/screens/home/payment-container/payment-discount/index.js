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
import {TextCmp} from '../../../../themes';

export default class PaymentDiscount extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          maxHeight: 25,
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flex: 2,
          }}>
          <TextCmp
            style={{
              alignItems: 'center',
              color: '#383E44',

              fontSize: normalize(3),
              fontWeight: '500',
            }}>
            Discount (%)
          </TextCmp>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: 'row',
            height: 15,
            maxHeight: 15,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '65%',
              height: 15,
              flexDirection: 'row',
            }}>
            <View style={{width: '40%', borderWidth: 0.5, height: 15}} />
            <View style={{width: '60%', height: 15, paddingLeft: 2}}>
              <TextCmp
                numberOfLines={1}
                style={{
                  color: '#383E44',
                  textAlign: 'left',
                  fontSize: normalize(3.5),
                }}>
                Fix Amount
              </TextCmp>
            </View>
          </View>
          <View
            style={{
              width: '25%',
              marginHorizontal: '5%',
              borderWidth: 0.5,
              height: 15,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            padding: 2,
            flex: 2,
            maxHeight: 15,
            maxWidth: 30,
          }}>
          <TextCmp
            style={{
              color: '#383E44',
              textAlign: 'right',
              fontSize: normalize(3.5),
            }}>
            $0
          </TextCmp>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
