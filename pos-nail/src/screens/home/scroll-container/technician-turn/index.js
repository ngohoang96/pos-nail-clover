import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Animated,
  Easing,
  PanResponder,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {iconsScroll} from '../../../../assets';
import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';

import TechnicianRepander from '../../../../Components/InitScreen/TechnicianRepander';
import {dataTechnician} from '../../../../Components/InitScreen/mockData';
import {ToastLib} from '../../../../utils';
import {TextCmp} from '../../../../themes';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexMap: 0,
      indexMapEnd: 4,
      dataMap: [],
      isAdd: true,
      isReduction: false,
    };
  }

  render() {
    const {indexMap, indexMapEnd, isAdd, isReduction} = this.state;
    return (
      <View style={styles.fx09}>
        <View style={styles.container}>
          <TextCmp style={styles.txtCenter}>Technician Turn</TextCmp>
        </View>
        <View style={styles.fx1}>
          {dataTechnician.map(item => {
            return (
              <TechnicianRepander
                key={item.id + ''}
                id={item.id}
                name={item.name}></TechnicianRepander>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: themes.height / 20,
    width: '100%',
    paddingLeft: 3,
    // paddingRight: 3,
    justifyContent: 'center',
  },
  fx09: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: 'white',

    // marginBottom: themes.height / 12,
  },
  txtCenter: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(5),
  },
  fx1: {flex: 1, backgroundColor: 'white'},
  tmp: {height: themes.height / 20},
});
