import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {dataService} from '../../../Components/InitScreen/mockData';
import TechnicianTurn from './technician-turn/index';
import Customer from './customer/index';
import QuickMenu from './quick-menu/index';
import FullMenu from './full-menu/index';
import Grid from './grid/index';
export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService,
    };
  }

  render() {
    return (
      <View style={styles.fx6}>
        <TechnicianTurn></TechnicianTurn>
        <Customer></Customer>
        <QuickMenu></QuickMenu>
        <FullMenu></FullMenu>
        <Grid></Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fx6: {flex: 6, flexDirection: 'row'},
});
