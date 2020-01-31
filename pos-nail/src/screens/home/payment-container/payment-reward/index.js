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

import {styles_home} from '../../styles';
import {TextCmp} from '../../../../themes';
import {styles} from '../styles';

export default class PaymentReward extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <View
      //   style={{
      //     flexDirection: 'row',
      //     justifyContent: 'space-between',
      //     flex: 1,
      //     maxHeight: 25,
      //     alignItems: 'center',
      //   }}>
      //   <View
      //     style={{
      //       justifyContent: 'flex-start',
      //       alignItems: 'flex-start',
      //       flex: 2,
      //     }}>
      //     <TextCmp
      //       style={{
      //         alignItems: 'center',
      //         color: '#383E44',

      //         fontSize: normalize(3),
      //         fontWeight: '500',
      //       }}>
      //       Reward
      //     </TextCmp>
      //   </View>
      //   <View
      //     style={{
      //       flex: 6,
      //       flexDirection: 'row',
      //       height: 15,
      //       maxHeight: 20,
      //       alignItems: 'center',
      //     }}>
      //     <View
      //       style={{
      //         width: '40%',
      //         borderWidth: 0.5,
      //         height: 15,
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <TextCmp
      //         style={{
      //           color: '#383E44',
      //           textAlign: 'right',
      //           fontSize: normalize(3.5),
      //         }}>
      //         $0
      //       </TextCmp>
      //     </View>
      //     <View
      //       style={{
      //         width: '50%',
      //         marginHorizontal: '5%',
      //         borderWidth: 0.5,
      //         height: 20,
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <TextCmp
      //         style={{
      //           color: '#383E44',
      //           textAlign: 'right',
      //           fontSize: normalize(3.5),
      //         }}>
      //         Reedem
      //       </TextCmp>
      //     </View>
      //   </View>
      //   <View
      //     style={{
      //       borderWidth: 0.5,
      //       padding: 2,
      //       flex: 2,
      //       maxHeight: 15,
      //       maxWidth: 30,
      //     }}>
      //     <TextCmp
      //       style={{
      //         color: '#383E44',
      //         textAlign: 'right',
      //         fontSize: normalize(3.5),
      //       }}>
      //       $0
      //     </TextCmp>
      //   </View>
      // </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapper_type}>
          <TextCmp style={styles.text}>Reward</TextCmp>
        </View>
        <View style={[styles.center_view, {flexDirection: 'row'}]}>
          <View style={[styles.first_card, {width: '44%'}]}></View>
          <View
            style={[
              styles.second_card,
              {width: '52%', justifyContent: 'center', alignItems: 'center'},
            ]}>
            <TextCmp>Reedem</TextCmp>
          </View>
        </View>
        <View style={styles.wrapper_cash}>
          <TextCmp style={styles.txt_cash}>$0</TextCmp>
        </View>
      </View>
    );
  }
}
