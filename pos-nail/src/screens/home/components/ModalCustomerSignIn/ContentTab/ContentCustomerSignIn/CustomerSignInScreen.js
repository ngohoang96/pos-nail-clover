import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';
import Name from './Name';
import Phone from './Phone';
import HaveAppoiment from './HaveAppoiment';
import SelectNewTechnician from './SelectNewTechnician';
import SelectServices from './SelectServices';
import {Logg} from '../../../../../../utils';
export default class index extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  render() {
    Logg.info('data props', this.props.DataTechnician);
    return (
      <View style={styles.container}>
        <Phone />
        <Name />
        <HaveAppoiment onSelect={(index, value) => alert(index + value)} />
        <SelectNewTechnician
          // _onPressFinish={data => {
          //   console.log(JSON.stringify(data));
          // }}
          dataStaffs={this.props.dataStaffs}
          // onPress={id => this.props.onPress(id)}
          DataTechnician={this.props.DataTechnician}
        />
        <SelectServices
          dataListSearch={this.props.dataListSearch}
          dataSearchButton={this.props.dataSearchButton}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2.9,
    backgroundColor: '#408EBA',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
});
