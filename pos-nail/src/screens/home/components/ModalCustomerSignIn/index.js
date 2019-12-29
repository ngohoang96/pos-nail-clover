import React, {Component} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, TextCmp} from '../../../../themes';
import TabButton from './TabButton';
import ContentCustomerSignIn from './ContentTab/ContentCustomerSignIn/index';
import ContentNewCustomer from './ContentTab/ContentNewCustomer';
import BottomButton from './BottomButton';
export default class index extends Component {
  // shouldComponentUpdate
  constructor(props) {
    super(props);
    this.state = {
      isContent: true,
    };
  }
  render() {
    const {isContent} = this.state;
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.onRequestClose(false)}>
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <TabButton
              active={isContent}
              setContent={a => this.setState({isContent: a})}
            />
            {isContent ? (
              <ContentCustomerSignIn
                dataStaffs={this.props.dataStaffs}
                dataSearchButton={this.props.dataSearchButton}
                dataListSearch={this.props.dataListSearch}
              />
            ) : (
              <ContentNewCustomer />
            )}
            {isContent ? (
              <BottomButton
                txt1="Close"
                txt3="Sign In"
                onPress={this.props.onPressIsModal}
                onPressFinish={() => {
                  alert('1');
                }}
              />
            ) : (
              <BottomButton
                txt1="Close"
                txt2="Add Customer"
                txt3="Add & CheckIn"
                onPress={this.props.onPressIsModal}
              />
            )}
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContent: {
    width: '60%',
    height: '80%',
    backgroundColor: '#408EBA',
  },
});
