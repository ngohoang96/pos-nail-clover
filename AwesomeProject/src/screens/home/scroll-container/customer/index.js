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
import ScaleTextLibrary from '../../../../Utils/ScaleTextLibrary';
import {normalize} from '../../../../Utils/scales';
import {styles_home} from '../../styles-home';
import ItemCustomer from '../../../../Components/InitScreen/itemCustomer';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.fx1PL2}>
        <View style={styles.containerTxt}>
          <ScaleTextLibrary
            styl={styles.txtLabel}
            font={themes.H5 + 1}
            text="Customer"></ScaleTextLibrary>
        </View>
        <ScrollView style={styles.fx1}>
          {[1, 2].map(item => {
            return <ItemCustomer></ItemCustomer>;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fx1PL2: {flex: 1, paddingLeft: 2},
  containerTxt: {
    height: themes.height / 20,
    width: '100%',
    padding: 3,
    justifyContent: 'center',
  },
  txtLabel: {
    alignItems: 'center',
    color: '#383E44',
  },
  fx1: {flex: 1},
});
