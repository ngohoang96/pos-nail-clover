import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BirthDay from './Birthday'
import Address from './Address'

export class index extends Component {

    render() {
        const { valueAddress, onChangeAddress, valueSelectDay, onChangeSelectDay, valueSelectMonth, onChangeSelectMonth } = this.props
        return (
            <View style={styles.container}>
                <BirthDay valueSelectDay={valueSelectDay} onChangeSelectDay={(e) => onChangeSelectDay(e, 6)}
                    valueSelectMonth={valueSelectMonth} onChangeSelectMonth={(e) => onChangeSelectMonth(e, 7)} />
                <Address valueAddress={valueAddress} onChangeAddress={(e) => onChangeAddress(e, 8)} />
            </View>
        )
    }
}

export default index
const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row',
        paddingHorizontal: '5%',
    }
})