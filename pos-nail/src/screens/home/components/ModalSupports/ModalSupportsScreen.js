import React, { Component } from 'react'
import { Text, View, ScrollView, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { Metrics, TextCmp, Colors } from '../../../../themes'
import Label from '../../components/ModalNailsTech/LabelModal'
import { normalize } from '../../../../themes/FontSize';
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
            modalVisible, onRequestClose, onPressClose
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
                            <Label
                                containerStyles={styles.bgDarkBlue}
                                title="Support Center"
                                onPressClose={() => onPressClose()}
                                textStyles={styles.fSize6}
                            />
                            <View style={{ flex: 3.5 }}></View>
                            <View style={styles.bottom}>
                                <TouchableOpacity
                                    onPress={() => onPressClose()}
                                    style={styles.btnClose}>
                                    <TextCmp style={styles.txtClose}>Close</TextCmp>
                                </TouchableOpacity>
                            </View>

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
    bgDarkBlue: { backgroundColor: Colors.darkBlue },
    bottom: { flex: 0.8, backgroundColor: Colors.darkBlue, justifyContent: "center", paddingLeft: 30 },
    btnClose: { width: '10%', height: '60%', borderRadius: 5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' },
    txtClose: { fontSize: normalize(5), color: 'black' },
    fSize6: { fontSize: normalize(6) }
})