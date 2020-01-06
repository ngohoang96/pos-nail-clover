import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ButtonComponent from '../../ModalManagerSystem/Content/RightContent/ButtonComponent'
import { Colors } from '../../../../../themes'

export class index extends Component {
    render() {
        const { onPressCancel, onPressConfirm } = this.props
        return (
            <View style={styles.container}>
                <ButtonComponent
                    onPress={() => onPressCancel()}
                    textStyles={styles.textStyles}
                    title="Cancel"
                    containerStyles={styles.containerStyles}
                />
                <ButtonComponent
                    onPress={() => onPressConfirm()}
                    textStyles={styles.textStyles}
                    title="Confirm"
                    containerStyles={styles.containerStyles}
                />
            </View>
        )
    }
}

export default index
const styles = StyleSheet.create({
    container: {
        flex: 0.8, backgroundColor: Colors.darkBlue, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-around'
    },
    textStyles: { color: "black", fontWeight: '400' },
    containerStyles: { width: '25%', height: '60%', backgroundColor: 'white' }
})