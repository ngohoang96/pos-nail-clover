import React, {Component} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Colors, TextCmp} from '../../../../themes';
import Label from './LabelModal';
import Input from './InputModal';
import Bottom from './BottomBackground';
import Keyboard from './Keyboard';

export default class index extends Component {
  // shouldComponentUpdate
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.onRequestClose(false)}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '60%',
              height: '70%',
              backgroundColor: Colors.darkBlue,
            }}>
            <Label onPressClose={value => this.props.onRequestClose(value)} />
            <Input />
            <Keyboard />
            <Bottom />
          </View>
        </View>
      </Modal>
    );
  }
}
