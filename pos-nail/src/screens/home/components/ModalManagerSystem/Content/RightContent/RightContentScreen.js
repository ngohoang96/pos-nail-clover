import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Customer from './customer'
import NailsTechnician from './nailsTechnician'
import ServiceDetail from './serviceDetail'
import GiftCard from './giftCard'
import Marketing from './marketing'
import Reports from './reports'
import BackOffice from './backOffice'
import TipsManager from './tipsManager'
import Cancel from './cancel'
export class RightContentScreen extends Component {

    render() {
        const { onPressCancel } = this.props
        return (
            <View
                style={styles.container}>
                <Customer onPress={() => alert(1)} />
                <NailsTechnician onPress={() => alert(1)} />
                <ServiceDetail onPress={() => alert(1)} />
                <GiftCard onPress={() => alert(1)} />
                <Marketing onPress={() => alert(1)} />
                <Reports onPress={() => alert(1)} />
                <BackOffice onPress={() => alert(1)} />
                <TipsManager onPress={() => alert(1)} />
                <Cancel onPress={() => onPressCancel()} />
            </View>
        )
    }
}

export default RightContentScreen
const styles = StyleSheet.create({
    container: { flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }
})