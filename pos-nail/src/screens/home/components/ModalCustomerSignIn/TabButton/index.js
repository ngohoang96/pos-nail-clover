import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CustomerSignIn from './CustomerSignIn';
import NewCustomer from './NewCustomer';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnCustomerActive: this.props.active,
    };
    console.log(this.props.active);
  }
  setBtnCustomerActive = value => {
    this.setState({
      btnCustomerActive: value,
    });
    this.props.setContent(value);
  };

  render() {
    const {btnCustomerActive} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <CustomerSignIn
            onPress={this.setBtnCustomerActive}
            backgroundColor={btnCustomerActive ? 'white' : '#408EBA'}
            textColor={btnCustomerActive ? 'black' : 'white'}
          />
          <NewCustomer
            onPress={this.setBtnCustomerActive}
            backgroundColor={!btnCustomerActive ? 'white' : '#408EBA'}
            textColor={!btnCustomerActive ? 'black' : 'white'}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#408EBA',
    alignItems: 'center',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  containerButton: {
    height: '100%',
    width: '95%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
