import React, {Component} from 'react';
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
import {normalize} from '../../../../themes/FontSize';
import TextCmp from '../../../../themes/TextCmp';
import Button2 from '../../../../Components/InitScreen/Button2';
import {items1} from '../../../../Components/InitScreen/mockData';
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
                  Textstyle={{color: 'black'}}
                  style_button={{
                    borderLeftColor: item.code,
                    width: '100%',
                    height: ((((themes.width * 3) / 3.8) * 0.5) / 3.9) * 0.3,
                    backgroundColor: 'white',
                  }}
                  lable={item.lable}></Button2>
              );
            })}
          </ScrollView>
        </View>
      </View>
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
  width100: {width: '100%'},
});
