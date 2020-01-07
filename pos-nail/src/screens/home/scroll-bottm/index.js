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

import themes from '../../../config/themes';
import { normalize } from '../../../themes/FontSize';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { data } from '../../../Components/InitScreen/mockData';
import { TextCmp } from '../../../themes';
export default class PaymentTips extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.containerFx065}>
        <ScrollView horizontal={true} style={styles.fx1P5}>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => this.props.onPressItem(item.lable)}
                key={item.id}
                activeOpacity={0.7}
                style={styles.containerTouch}>
                <IonIcon
                  name={item.icon}
                  color={'#444444'}
                  size={normalize(5)}></IonIcon>
                <View style={styles.center}>
                  <TextCmp style={styles.txtLabel}>{item.lable}</TextCmp>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTouch: {
    minHeight: '40%',
    borderWidth: 1,
    borderColor: '#C1C1C1',
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    marginVertical: 1,
    marginRight: 10,
    backgroundColor: 'white',
    paddingVertical: 7,
  },
  fx1P5: { flex: 1, padding: 5 },
  center: { alignItems: 'center', justifyContent: 'center' },
  txtLabel: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 3,
    fontSize: normalize(4),
  },
  containerFx065: {
    borderTopWidth: 1,
    borderTopColor: '#C1C1C1',
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    right: 0,
    left: (themes.width * 1.2) / 5.6,
    minHeight: themes.height / 12,
    maxHeight: themes.height / 12,
  },
});
