import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextCmp } from '../../../../../../themes'
import { normalize } from '../../../../../../themes/FontSize'
import { StylesModal } from '../../StylesModalScreen'
export default class InputSecurityCode extends Component {
    render() {
        const { valueSecurityCode } = this.props
        let tmp = ''
        for (let i = 0; i < valueSecurityCode.length; ++i) {
            tmp += '*'
        }
        return (
            <View style={styles.container}>
                <TextCmp
                    style={[StylesModal.txtInput, { color: valueSecurityCode ? 'black' : 'gray' }]}>
                    {tmp || 'Security code'}
                </TextCmp>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" }
})