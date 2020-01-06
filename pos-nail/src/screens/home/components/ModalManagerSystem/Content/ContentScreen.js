import React, { Component } from 'react'
import { Text, View } from 'react-native'
import InputSecurityCode from './LeftContent/InputSecurityCode';
import InputUserNameStaffCode from './LeftContent/InputUserNameStaffCode';
import Keyboard from '../../ModalNailsTech/Keyboard'
import RightContent from './RightContent'
export class ContentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSecurityCode: '',
            valueUsernameStaffCode: ''
        }
    }
    _onPressKey = key => {
        const { valueSecurityCode } = this.state
        let tmp = valueSecurityCode;
        if (key === 'C') {
            tmp = ''
        } else if (key === '<<') {
            tmp = tmp.slice(0, tmp.length - 1)
        } else {
            tmp += key
        }
        this.setState({
            valueSecurityCode: tmp
        })

    }
    setValueUsernameStaffCode = (e) => {
        this.setState({
            valueUsernameStaffCode: e
        })
        console.log('_____e_________', e + '   ' + this.state.valueUsernameStaffCode)
    }
    render() {
        const { valueSecurityCode, valueUsernameStaffCode } = this.state
        const { onPressCancel } = this.props
        return (
            <View style={{ flex: 3.5, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <InputSecurityCode valueSecurityCode={valueSecurityCode} />
                        <InputUserNameStaffCode
                            valueUsernameStaffCode={valueUsernameStaffCode}
                            onChangeValueUsernameStaffCode={this.setValueUsernameStaffCode} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Keyboard
                            containerStyles={{ flex: 10, marginTop: 1 }}
                            keyStyle="none"
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
                        />
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>
                <RightContent onPressCancel={() => onPressCancel()} />
            </View>

        )
    }
}

export default ContentScreen
