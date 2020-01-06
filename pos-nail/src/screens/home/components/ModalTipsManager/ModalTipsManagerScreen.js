import React, { Component } from 'react'
import { Text, View, ScrollView, Modal, StyleSheet } from 'react-native'
import { Metrics, TextCmp, Colors } from '../../../../themes'
import Label from '../../components/ModalNailsTech/LabelModal'
import ButtonBottom from './ButtonBottom'
import Input from './inputTipsManager'
import Keyboard from '../ModalNailsTech/Keyboard'
export default class ModalTipsManagerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTipsManager: ''
        }
    }
    _onPressKey = key => {
        const { valueTipsManager } = this.state
        let tmp = valueTipsManager;
        if (key === 'C') {
            tmp = ''
        } else if (key === '<<') {
            tmp = tmp.slice(0, tmp.length - 1)
        } else {
            tmp += key
        }
        this.setState({
            valueTipsManager: tmp
        })

    }
    render() {
        const { modalVisible, onPressClose, onRequestClose, onPressCancel, onPressConfirm } = this.props
        const { valueTipsManager } = this.state
        return (
            <Modal
                animationType={'none'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => onRequestClose()}>
                <ScrollView contentContainerStyle={styles.containerScroll}>
                    <View style={styles.containerView1}>
                        <View
                            style={styles.containerView2}>
                            <Label
                                containerStyles={styles.bgDarkBlue}
                                title="Enter Office Password"
                                onPressClose={() => onPressClose()} />
                            <View style={{ flex: 3.5 }}>
                                <Input
                                    valueTipsManager={valueTipsManager} />
                                <Keyboard
                                    containerStyles={{ flex: 4, marginTop: 1 }}
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
                            </View>
                            <ButtonBottom
                                onPressCancel={() => onPressCancel()}
                                onPressConfirm={() => { alert(valueTipsManager) }}
                            />
                        </View>

                    </View>
                </ScrollView>
            </Modal>
        )
    }
}


const styles = StyleSheet.create({
    containerView1: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerScroll: { width: '100%', height: Metrics.appHeight },
    containerView2: {
        width: '35%',
        height: '70%',
        backgroundColor: "#397DA4",
    },
    bgDarkBlue: { backgroundColor: Colors.darkBlue }
})