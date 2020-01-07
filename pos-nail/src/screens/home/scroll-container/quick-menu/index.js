import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import themes from '../../../../config/themes';
import { normalize } from '../../../../themes/FontSize';

import Button2 from '../../../../Components/InitScreen/Button2';
import { items1 } from '../../../../Components/InitScreen/mockData';
import { TextCmp } from '../../../../themes';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.fx05MGH10}>
        <View style={styles.containerTxt}>
          <TextCmp style={styles.txt}>Quick Menu</TextCmp>
        </View>

        <View style={styles.containerScroll}>
          <ScrollView style={styles.width100}>
            {items1.map((item, index) => {
              return (
                <Button2
                  key={index}
                  Textstyle={{
                    color: 'black',
                    fontSize: normalize(4)
                  }}
                  style_button={{
                    width: '100%',
                    minHeight: ((((themes.width * 3) / 3.8) * 0.5) / 3.9) * 0.3,
                    borderLeftColor: '#' + (Math.random().toString(16) + "000000").substring(2, 8),
                    paddingVertical: 10,
                    // backgroundColor: item.catname === mCatName ? '#CAE5E8' : '#fff'
                  }}
                  lable={item.lable}
                  textstyles={{ fontWeight: '300' }} />
              );
            })}
          </ScrollView>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  fx05MGH10: {
    marginHorizontal: 10,
    flex: 0.5,
    zIndex: -1,
  },
  containerTxt: {
    height: themes.height / 20,
    padding: 3,
    justifyContent: 'center',
  },
  txt: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(5),
  },
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  width100: { width: '100%' },
});
