import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { normalize } from '../../../../../../../themes/FontSize'
import { TextCmp } from '../../../../../../../themes'

export class FirstName extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginLeft: 30, justifyContent: 'flex-end' }}>
                <TextCmp style={{
                    fontSize: normalize(5),
                    fontWeight: 'bold', color: 'white'
                }}>
                    Mail Address(*) </TextCmp>
                <TextInput
                    value={this.props.valueMailAddress}
                    onChangeText={(e) => this.props.onChangeMailAddress(e)}
                    style={{
                        width: '100%',
                        height: '50%',
                        backgroundColor: 'white',
                        marginTop: 5,
                    }}
                />
            </View>
        )
    }
}

export default FirstName
