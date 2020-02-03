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

import Button2 from '../../../../Components/InitScreen/Button2';
import {items1} from '../../../../Components/InitScreen/mockData';
import {TextCmp, Colors} from '../../../../themes';
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
                  style_button={{
                    width: '100%',
                    minHeight: ((((themes.width * 3) / 3.8) * 0.5) / 3.9) * 0.3,
                    // borderLeftColor:
                    //   '#' +
                    //   (Math.random().toString(16) + '000000').substring(2, 8),
                    paddingVertical: 10,
                    backgroundColor: Colors.bgGray,
                  }}
                  lable={item.lable}
                  textstyles={{fontWeight: '300'}}
                />
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
    flex: 1,
    zIndex: -1,
    backgroundColor: Colors.orange,
  },
  containerTxt: {
    height: themes.height / 20,
    justifyContent: 'center',

    backgroundColor: Colors.bgGray,
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    alignItems: 'center',
    color: 'black',
    fontSize: normalize(5),
  },
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  width100: {width: '100%'},
});
