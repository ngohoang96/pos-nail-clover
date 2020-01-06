import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FirstName from './FirstName'
import LastName from './LastName'
import MailAddress from './MailAddress'
export class index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { valueFirstName, valueLastName, valueMailAddress, onChangeFirstName, onChangeLastName, onChangeMailAddress } = this.props
        return (
            <View style={styles.container}>
                <View
                    style={styles.containerName}>
                    <FirstName valueFirstName={valueFirstName} onChangeFirstName={(e) => onChangeFirstName(e, 3)} />
                    <LastName valueLastName={valueLastName} onChangeLastName={(e) => onChangeLastName(e, 4)} />
                </View>
                <MailAddress valueMailAddress={valueMailAddress} onChangeMailAddress={(e) => onChangeMailAddress(e, 5)} />
            </View>
        )
    }
}

export default index
const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row',
        paddingHorizontal: '5%',
    },
    containerName: { flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }
})