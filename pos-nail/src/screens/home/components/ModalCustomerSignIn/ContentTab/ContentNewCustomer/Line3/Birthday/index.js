import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { styles_home } from '../../../../../../styles-home';
import SelectMonth from './SelectMonth'
import SelectDay from './SelectDay'
export class index extends Component {
    render() {
        const { onChangeSelectDay, valueSelectDay, valueSelectMonth, onChangeSelectMonth } = this.props
        return (
            <View
                style={styles.container}>
                <SelectMonth valueSelectMonth={valueSelectMonth} onChangeSelectMonth={(e) => onChangeSelectMonth(e)} />
                <SelectDay valueSelectDay={valueSelectDay} onChangeSelectDay={(e) => onChangeSelectDay(e)} />
            </View>
        )
    }
}

export default index
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }
})