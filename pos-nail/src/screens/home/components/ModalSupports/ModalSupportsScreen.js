import React, { Component } from 'react'
import { Text, View, ScrollView, Modal, StyleSheet } from 'react-native'
import { Metrics, TextCmp, Colors } from '../../../../themes'
// import Label from '../../components/ModalNailsTech/LabelModal'
// import ButtonBottom from './ButtonBottom'
// import Input from './inputTipsManager'
// import Keyboard from '../ModalNailsTech/Keyboard'
export default class ModalSupportsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const {
            modalVisible, onRequestClose
        } = this.props
        const { } = this.state
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
                            {/* <Label
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
                            /> */}
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
        width: '55%',
        height: '50%',
        backgroundColor: "#397DA4",
    },
    bgDarkBlue: { backgroundColor: Colors.darkBlue }
})