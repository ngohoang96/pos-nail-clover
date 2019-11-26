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
import ScaleTextLibrary from '../../../../utils/ScaleTextLibrary';
import {normalize} from '../../../../utils/scales';
import {styles_home} from '../../styles-home';
import {items2} from '../../../../Components/InitScreen/mockData'
import Button2 from '../../../../Components/InitScreen/Button2';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ItemScrollView from './itemScrollView'
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.fx05MGH10}>
        <View style={styles.fxD_row}>
          <View style={styles.containerLabel}>
            <ScaleTextLibrary
              styl={styles.txtLabel}
              font={themes.H5 + 1}
              text="Full Menu"></ScaleTextLibrary>
          </View>
          <View style={styles.containerIconMenu}>
            <IonIcon
              name="ios-menu"
              size={18}
              color="black"
              style={{}}></IonIcon>
          </View>
        </View>
        <View style={styles.containerScroll}>
          <ScrollView style={styles.width100}>
            {items2.map(item => {
              return (
                  <ItemScrollView code = {item.code}></ItemScrollView>
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
  },
  fxD_row: {
    flexDirection: 'row',
  },
  containerLabel: {
    height: themes.height / 20,
    padding: 3,
    justifyContent: 'center',
  },
  txtLabel: {
    alignItems: 'center',
    color: '#383E44',
  },
  containerIconMenu: {alignItems: 'center', justifyContent: 'center'},
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  width100: {width: '100%'},
  colorBlack: {color: 'black'},

});