import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Colors, TextCmp, Metrics } from '../../../../themes';

import Label from '../ModalNailsTech/LabelModal';
import Bottom from '../ModalNailsTech/BottomBackground';
import ContentScreen from './Content'
export default class ModalManagerSystemScreen extends Component {
    render() {
        // onRequestClose và onPressClose không có gì khác nhau nhưng 1 cái truyền param
        const { modalVisible, onRequestClose, onPressClose } = this.props
        return (
            <Modal
                animationType={'none'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => onRequestClose(false)}>
                <ScrollView contentContainerStyle={styles.containerScroll}>
                    <View
                        style={styles.containerView1}>

                        <View
                            style={styles.containerView2}>
                            <Label
                                containerStyles={styles.bgDarkBlue}
                                title="Manager System"
                                onPressClose={() => onPressClose()} />
                            <ContentScreen onPressCancel={() => onPressClose()} />
                            <Bottom containerStyles={styles.bgDarkBlue} />
                        </View>

                    </View>
                </ScrollView>
            </Modal>
        );
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
        width: '60%',
        height: '70%',
        backgroundColor: "#397DA4",
    },
    bgDarkBlue: { backgroundColor: Colors.darkBlue }
})