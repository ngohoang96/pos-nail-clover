import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import themes from '../../../../config/themes';
import ScaleTextLibrary from '../../../../utils/ScaleTextLibrary';
import {normalize} from '../../../../utils/scales';
import {styles_home} from '../../styles-home';
import TechnicianRepander from '../../../../Components/InitScreen/TechnicianRepander';
import {dataTechnician} from '../../../../Components/InitScreen/mockData'
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.fx09}>
        <View style={styles.container}>
          <ScaleTextLibrary
            styl={styles.txtCenter}
            font={themes.H5 + 1}
            text="Technician Turn"></ScaleTextLibrary>
        </View>

        <ScrollView style={styles.fx1}>
          <View style={styles.tmp}></View>
          {dataTechnician.map(item => {
            return <TechnicianRepander name={item.name}></TechnicianRepander>;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: themes.height / 20,
    width: '100%',
    padding: 3,
    justifyContent: 'center',
    position: 'absolute',
  },
  fx09: {flex: 0.9 , overflow :'scroll'},
  txtCenter: {
    alignItems: 'center',
    color: '#383E44',
  },
  fx1: {flex: 1},
  tmp: {height: themes.height / 20, zIndex: 10},
});
