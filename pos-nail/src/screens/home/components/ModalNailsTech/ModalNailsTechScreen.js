import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, TextCmp, Metrics } from '../../../../themes';
import Label from './LabelModal';
import Input from './InputModal';
import Bottom from './BottomBackground';
import Keyboard from './Keyboard';

export default class ModalNailsTechScreen extends Component {
    // shouldComponentUpdate
    constructor(props) {
        super(props);
        this.state = {
            valueStaffPinCode: ''
        };
    }
    _onPressKey = key => {
        this.props._onChangeStaffPinText(key)
    }
    _onPressClockOut = () => {
        const { inputNailsTechClockIN, _technicianCheckOut } = this.props
        let params = {
            PINCode: inputNailsTechClockIN,
            storeCode: 'MAX12898'
        }
        _technicianCheckOut(params)
    }
    _onPressClockIn = () => {
        const { inputNailsTechClockIN, _technicianCheckIN } = this.props
        let params = {
            PINCode: inputNailsTechClockIN,
            storeCode: 'MAX12898'
        }
        _technicianCheckIN(params)
    }
    _onPressCloseOut = () => {
        const { inputNailsTechClockIN, _technicianCloseOut } = this.props
        let params = {
            PINCode: inputNailsTechClockIN,
            storeCode: 'MAX12898'
        }
        _technicianCloseOut(params)
    }
    _onPressCancel = () => {
        this.props.onRequestClose(false)
    }
    render() {
        const { valueStaffPinCode } = this.state
        return (
            <Modal
                animationType={'none'}
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => this.props.onRequestClose(false)}>
                <ScrollView contentContainerStyle={{ width: '100%', height: Metrics.appHeight }}>
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
                            <Keyboard
                                onPress1={() => this._onPressKey('1')}
                                onPress2={() => this._onPressKey('2')}
                                onPress3={() => this._onPressKey('3')}
                                onPress4={() => this._onPressKey('4')}
                                onPress5={() => this._onPressKey('5')}
                                onPress6={() => this._onPressKey('6')}
                                onPress7={() => this._onPressKey('7')}
                                onPress8={() => this._onPressKey('8')}
                                onPress9={() => this._onPressKey('9')}
                                onPressC={() => this._onPressKey('C')}
                                onPress0={() => this._onPressKey('0')}
                                onPressPop={() => this._onPressKey('<<')}
                                onPressClockIn={this._onPressClockIn}
                                onPressClockOut={this._onPressClockOut}
                                onPressCloseOut={this._onPressCloseOut}
                                onPressCancel={this._onPressCancel}
                            />
                            <Bottom />
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        );
    }
}
