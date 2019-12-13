/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {styles_home} from './styles-home';
import PaymentContainer from './payment-container/payment-screen';
import ScrollBottom from './scroll-bottm/index';
import ScrollScreen from './scroll-container/scroll-screen';

import TechnicianRepander from '../../Components/InitScreen/TechnicianRepander';
import themes from '../../themes';

import Grid from './scroll-container/grid/index';
import TechnicianTurn from './scroll-container/technician-turn/index';
import Customer from './scroll-container/customer/index';
import QuickMenu from './scroll-container/quick-menu/index';
import FullMenu from './scroll-container/full-menu/index';
class InitScreen extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles_home.container}>
        <View style={{flex: 1.2}}>
          <PaymentContainer></PaymentContainer>
        </View>
        <View style={{flex: 0.9}}>
          <TechnicianTurn></TechnicianTurn>
        </View>
        <View style={{flex: 1.1}}>
          <Customer></Customer>
        </View>
        <View style={{flex: 1.2, flexDirection: 'row'}}>
          <QuickMenu></QuickMenu>
          <FullMenu></FullMenu>
        </View>
        <View style={{flex: 1.2}}>
          <Grid></Grid>
        </View>

        <ScrollBottom></ScrollBottom>

        {/*
           <PaymentContainer></PaymentContainer>
      <View style={styles.fx3}>
        <ScrollScreen></ScrollScreen>
        <ScrollBottom></ScrollBottom>
      </View>
           <PaymentContainer></PaymentContainer>
        <View style={styles.fx3}>
          <ScrollScreen></ScrollScreen>
          <ScrollBottom></ScrollBottom>
        </View>
 <ScrollView
       horizontal = {false}
          style={{
            position: 'absolute',
          }}>
          {[1, 2, 3, 4, 5, 5, 6, 6,4].map((item, index) => {
            return <TechnicianRepander name="test"></TechnicianRepander>;
          })}
        </ScrollView>
      
          <View
          style={{
            width: (themes.width * 0.8) / 3.8,
            height: themes.height,
            backgroundColor: 'transparent',
            position: 'absolute',
            left: (themes.width * 0.8) / 3.8,
          }}>
          {[1, 2, 3, 5, 6, 2, 3, 5, 6].map(item => {
            return <TechnicianRepander name="test"></TechnicianRepander>;
          })}
        </View>*/}
      </SafeAreaView>
    );
  }
}
export default InitScreen;
const styles = StyleSheet.create({
  fx3: {flex: 3, backgroundColor: 'white'},
});
