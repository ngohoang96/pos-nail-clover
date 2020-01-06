import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextCmp } from '../../../../../../../themes'
import Phone from './Phone'
import RefferalCode from './RefferalCode'
export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Phone valuePhone={this.props.valuePhone} onChangePhone={(e, i) => this.props.onChangePhone(e, i)} />
                <RefferalCode valueRefferalCode={this.props.valueRefferalCode} onChangeRefferalCode={(e, i) => this.props.onChangeRefferalCode(e, i)} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row',
        paddingHorizontal: '5%',
    }
})