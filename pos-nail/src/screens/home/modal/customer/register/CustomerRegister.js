import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Colors} from '../../../../../themes';
import Phone from './Phone';
import Name from './Name';
import SelectAppoiment from './SelectAppoiment';
import TimeAppoiment from './TimeAppoiment';
import SelectTechnician from './SelectNewTechnician/SelectTechnician';
import SelectServices from './SelectServices';
import BottomBtn from './bottom-btn/BottomBtn';
export default class CustomerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      firstName: '',
      lastName: '',
      haveAppoiment: 0,
      paramSignIn: null,
    };
  }

  onChangeText = (key, value) => {
    if (key === 'phone') {
      if (isNaN(value)) {
        alert('Please enter number only!');
      } else {
        this.setState({[key]: value});
      }
    } else {
      this.setState({[key]: value});
    }
  };

  onSelect = value => {
    this.setState({haveAppoiment: value});
  };

  render() {
    const {phone, firstName, lastName, haveAppoiment} = this.state;
    const {onClose} = this.props;
    return (
      <View style={styles.container}>
        <Phone value={phone} onChangeText={this.onChangeText} />
        <Name
          firstName={firstName}
          lastName={lastName}
          onChangeText={this.onChangeText}
        />
        <SelectAppoiment onSelect={this.onSelect} />
        {haveAppoiment === '1' ? (
          <View style={{flex: 2}}>
            <TimeAppoiment />
            <View style={{flex: 1}} />
          </View>
        ) : (
          <View style={{flex: 2}}>
            <SelectTechnician />
            <SelectServices />
          </View>
        )}
        <BottomBtn onClose={onClose} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundModal,
    width: '100%',
    height: '100%',
    paddingBottom: 10,
  },
});
