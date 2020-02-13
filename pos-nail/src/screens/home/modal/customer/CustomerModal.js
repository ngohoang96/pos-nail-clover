import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Metrics, TextCmp} from '../../../../themes';
import {TabView} from 'react-native-tab-view';

import CustomerRegister from './register/index';

import TopTab from './TopTab';
import CustomerSignIn from './sign-in/index';

export default class CustomerModal extends Component {
  shouldComponentUpdate({visible: newVisible}, {index: newIndex}) {
    return newIndex !== this.state.index || newVisible !== this.props.visible;
  }
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        {key: 'sign-in', title: 'First'},
        {key: 'register', title: 'Second'},
      ],
    };
  }

  onIndexChange = index => {
    this.setState({index});
  };

  renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'sign-in':
        return <CustomerSignIn onClose={this.props.onClose} />;
      case 'register':
        return <CustomerRegister onClose={this.props.onClose} />;
    }
  };

  render() {
    const {visible, onClose} = this.props;
    const {index} = this.state;
    return (
      // <KeyboardAvoidingView
      //   style={{backgroundColor: '#fff'}}
      //   behavior="padding"
      //   keyboardVerticalOffset={Platform.OS === 'android' && -500}>
      <Modal
        visible={visible}
        onRequestClose={() => onClose(false)}
        transparent={true}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TopTab index={index} onIndexChange={this.onIndexChange} />
            <View
              style={{
                width: '100%',
                height: '85%',
              }}>
              <TabView
                navigationState={this.state}
                renderScene={this.renderScene}
                style={{height: '100%', width: '100%'}}
                swipeEnabled
                renderTabBar={() => null}
                onIndexChange={index => this.onIndexChange(index)}
                initialLayout={{width: Metrics.appWidth}}
              />
            </View>
          </View>
        </View>
      </Modal>
      // </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  wrapper: {
    width: (Metrics.appWidth * 70) / 100,
    height: (Metrics.appHeight * 70) / 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 5,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    borderRadius: 5,
    elevation: 6,
    backgroundColor: '#fff',
  },
  btn: {
    height: 50,
    width: 150,
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
