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
import {TextCmp, Metrics, Colors} from '../../../../themes';
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
    const {nailTechDropZone} = this.props;
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
                name={item.name}
                nailTechDropZone={nailTechDropZone}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Metrics.appHeight / 20,
    width: '100%',
    // paddingRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  fx09: {
    flex: 1,
    // overflow: 'scroll',
    backgroundColor: Colors.bgGray,

    // marginBottom: themes.height / 12,
  },
  txtCenter: {
    alignItems: 'center',
    color: 'black',
    fontSize: normalize(5),
  },
  fx1: {
    flex: 1,
    backgroundColor: Colors.orange,
    borderRightWidth: 0.5,
    borderRightColor: '#CECECE',
  },
  tmp: {
    height: Metrics.appHeight / 20,
  },
});
