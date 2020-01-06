import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { normalize } from '../../../../../../themes/FontSize'
import { TextCmp } from '../../../../../../themes'
import { StylesModal } from '../../StylesModalScreen'

export default class InputUserNameStaffCode extends Component {
    render() {
        const { valueUsernameStaffCode, onChangeValueUsernameStaffCode } = this.props

        return (
            <View style={styles.container}>
                {/* <TextCmp
                    style={[StylesModal.txtInput, { color: this.props.valueSecurityCode ? 'black' : 'gray', borderLeftWidth: 0.5, borderLeftColor: '#BEBEBE' }]}>
                    {this.props.valueSecurityCode || 'Username/Staff code'}
                </TextCmp> */}
                <TextInput
                    secureTextEntry={true}
                    style={[StylesModal.txtInput, { borderLeftWidth: 0.5, borderLeftColor: '#BEBEBE' }]}
                    value={valueUsernameStaffCode}
                    placeholder={'Username/Staff code'}
                    placeholderTextColor="gray"
                    onChangeText={e => onChangeValueUsernameStaffCode(e)}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", paddingLeft: 5 }
})