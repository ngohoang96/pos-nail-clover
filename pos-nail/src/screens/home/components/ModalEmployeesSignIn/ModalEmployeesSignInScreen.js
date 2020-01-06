import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, TextCmp, Metrics } from '../../../../themes';
import Label from '../ModalNailsTech/LabelModal';
import Input from './InputEmployees';
import Bottom from '../ModalNailsTech/BottomBackground';
import Keyboard from '../ModalNailsTech/Keyboard';

export default class ModalEmployeesSignInScreen extends Component {
    // shouldComponentUpdate
    constructor(props) {
        super(props);
        this.state = {
            valueStaffPinCode: '',
            valueInputEmployees: ''
        };
    }
    _onPressKey = key => {
        const { valueInputEmployees } = this.state
        let tmp = valueInputEmployees;
        if (key === 'C') {
            tmp = ''
        } else if (key === '<<') {
            tmp = tmp.slice(0, tmp.length - 1)
        } else {
            tmp += key
        }
        this.setState({
            valueInputEmployees: tmp
        })

    }
    _onPressClockIn = () => {
        const { AppCheckInEmployeeCheckIn } = this.props
        const { valueInputEmployees } = this.state
        let params = {
            PINCode: valueInputEmployees,
            storeCode: 'MAX12898'
        }
        AppCheckInEmployeeCheckIn(params)
    }
    _onPressClockOut = () => {
        const { AppCheckInEmployeeCheckOut } = this.props
        const { valueInputEmployees } = this.state
        let params = {
            PINCode: valueInputEmployees,
            storeCode: 'MAX12898'
        }
        AppCheckInEmployeeCheckOut(params)
    }

    _onPressCloseOut = () => {
        const { AppCheckInEmployeeCloseOut } = this.props
        const { valueInputEmployees } = this.state
        let params = {
            PINCode: valueInputEmployees,
            storeCode: 'MAX12898'
        }
        AppCheckInEmployeeCloseOut(params)

    }
    _onPressCancel = () => {
        this.props.onRequestClose()
        console.log('cancel')
    }
    render() {
        const { valueInputEmployees } = this.state
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
                            <Label title="Employees Clock In / Clock Out" onPressClose={value => this.props.onRequestClose(value)} />
                            <Input inputNailsTechClockIN={valueInputEmployees} />
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
