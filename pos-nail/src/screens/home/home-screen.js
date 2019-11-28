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

// import TechnicianRepander from './Components/InitScreen/TechnicianRepander';
// import themes from './config/themes';
class InitScreen extends Component {
  static options(passprops) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles_home.container}>
        <PaymentContainer />
        <View style={styles.fx3}>
          <ScrollScreen />
          <ScrollBottom />
        </View>

        {/* <ScrollView
       horizontal = {false}
          style={{
            position: 'absolute',
          }}>
          {[1, 2, 3, 4, 5, 5, 6, 6,4].map((item, index) => {
            return <TechnicianRepander name="test"></TechnicianRepander>;
          })}
        </ScrollView> */}
      </SafeAreaView>
    );
  }
}
export default InitScreen;
const styles = StyleSheet.create({
  fx3: {flex: 3, backgroundColor: 'white'},
});
