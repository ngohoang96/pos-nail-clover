import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../../../../../../../../themes'
import ComponentButton from '../../../../BottomButton/ComponentButton'

export class index extends Component {

    render() {
        const { _onPressClose, _onPressFinish } = this.props
        return (
            <View style={styles.containerBottomModal}>
                <ComponentButton onPress={() => _onPressClose()} text="Close" />
                <View />
                <ComponentButton onPress={() => _onPressFinish()} text="Finish" />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)

const styles = StyleSheet.create({
    containerBottomModal: {
        width: Metrics.appWidth * 0.8,
        height: Metrics.appHeight * 0.1,
        backgroundColor: '#397DA4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})