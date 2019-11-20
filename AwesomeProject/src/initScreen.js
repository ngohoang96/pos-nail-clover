/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  PixelRatio,
  KeyboardAvoidingView,
  Animated,
  Easing,
  FlatList,
} from 'react-native';
import themes from './config/themes';
import {
  data,
  items,
  items1,
  items2,
  dataService,
  dataTechnician,
} from './Components/InitScreen/mockData';
import {Button} from './Components/InitScreen';
import Button2 from './Components/InitScreen/Button2';
import ItemCustomer from './Components/InitScreen/itemCustomer';
import ItemService from './Components/InitScreen/ItemService';
import {styles_home} from './screens/home/styles-home';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GridList from 'react-native-grid-list';
import {normalize} from './Utils/scales';

import ScaleTextLibrary from './Utils/ScaleTextLibrary';
import {scaleText} from 'react-native-text';

import TechnicianRepander from './Components/InitScreen/TechnicianRepander';
import PaymentContainer from './screens/home/payment-container/payment-screen';
import ScrollBottom from './screens/home/scroll-bottm/index';
import ScrollScreen from './screens/home/scroll-container/scroll-screen';

class InitScreen extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles_home.container}>
        <PaymentContainer></PaymentContainer>
        <View style={styles.fx3}>
          <ScrollScreen></ScrollScreen>
          <ScrollBottom></ScrollBottom>
        </View>
      </SafeAreaView>
    );
  }
}
export default InitScreen;
const styles = StyleSheet.create({
  fx3: {flex: 3, backgroundColor: 'white'},
});
