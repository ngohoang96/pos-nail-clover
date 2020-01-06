import React, { Component } from 'react';
import { View, Dimensions, Modal, TouchableOpacity, StyleSheet, ScrollView, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Colors, TextCmp, Metrics } from '../../../../themes';
import TabButton from './TabButton';
import ContentCustomerSignIn from './ContentTab/ContentCustomerSignIn/index';
import ContentNewCustomer from './ContentTab/ContentNewCustomer/index';
import BottomButton from './BottomButton';

import { KeyboardAwareScrollView, } from 'react-native-keyboard-aware-scroll-view';

export default class index extends Component {

  // shouldComponentUpdate
  constructor(props) {
    super(props);
    this.state = {
      isContent: true,
      keyboardSpace: 0,
      childrenData: {}
    };
    Keyboard.addListener('keyboardDidShow', (frames) => {
      if (!frames.endCoordinates) return;
      this.setState({ keyboardSpace: frames.endCoordinates.height });
    });
    Keyboard.addListener('keyboardDidHide', (frames) => {
      this.setState({ keyboardSpace: 0 });
    });
  }

  updateChildrenData = (data) => {
    this.setState({ childrenData: data })
  }
  render() {
    const { isContent } = this.state;
    return (
      // <KeyboardAwareScrollView
      // // style={{ flex: 1, backgroundColor: "#fff" }}
      // // behavior="padding"
      // // keyboardVerticalOffset={Platform.OS === "android" && -500}
      // >
      <KeyboardAvoidingView
        style={{ backgroundColor: "#fff" }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "android" && -500}
      >
        <Modal
          // style={{
          //   position: 'absolute',
          //   bottom: 0,
          //   //change modal position by keyboardspace
          //   top: this.state.keyboardSpace ? -10 - this.state.keyboardSpace : -100,
          //   padding: 20,
          //   width: Metrics.appWidth,
          //   height: Metrics.appHeight,
          //   borderRadius: 15,
          //   backgroundColor: 'red'
          // }}
          // backdrop={false} position={"bottom"}
          // entry={"bottom"}

          animationType={'none'}
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => this.props.onRequestClose(false)}>
          <ScrollView contentContainerStyle={{
            height: Metrics.appHeight, width: '100%',
            paddingTop: this.state.keyboardSpace ? -10 - this.state.keyboardSpace : -100,
          }}
          >
            <View style={styles.container}>

              {/* <KeyboardAwareScrollView contentContainerStyle={{ width: '100%', height: '100%' }}> */}
              <View style={styles.containerContent}>

                <TabButton
                  active={isContent}
                  setContent={a => this.setState({ isContent: a })}
                />

                {/*Hiển thị phần centerContent*/}
                {isContent ? (
                  <ContentCustomerSignIn
                    dataStaffs={this.props.dataStaffs}
                    dataSearchButton={this.props.dataSearchButton}
                    dataListSearch={this.props.dataListSearch}
                    updateChildrenData={this.updateChildrenData}
                    onPressIsModal={this.props.onPressIsModal}
                  />
                ) : (
                    <ContentNewCustomer onPressIsModal={this.props.onPressIsModal} />
                  )}
                {/*Hiển thị phần BottomContent*/}
                {/* {isContent ? (
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
                      onPressAddCustomer={() => alert('Add Customer')}
                      onPressFinish={() => alert('Add & CheckIn')}
                      txt1="Close"
                      txt2="Add Customer"
                      txt3="Add & CheckIn"
                      onPress={this.props.onPressIsModal}
                    />
                  )} */}

              </View>

              {/* </KeyboardAwareScrollView> */}
            </View>

          </ScrollView>
        </Modal>
      </KeyboardAvoidingView >

    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrics.appHeight,
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
