import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {styles_home} from '../styles-home';
import themes from '../../../config/themes';
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
        <View style={styles.fx3}>
          <Customer></Customer>
          <QuickMenu></QuickMenu>
          <FullMenu></FullMenu>
          <Grid></Grid>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fx6: {flex: 6, backgroundColor: 'white', flexDirection: 'row'},
  fx3: {flexDirection: 'row', flex: 3},
});
