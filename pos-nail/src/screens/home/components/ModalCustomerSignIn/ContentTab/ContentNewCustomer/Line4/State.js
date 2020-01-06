import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { TextCmp } from '../../../../../../../themes'

import { normalize } from '../../../../../../../themes/FontSize'
export class State extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TextCmp style={{
                    fontSize: normalize(5),
                    fontWeight: 'bold', color: 'white'
                }}>
                    State
            </TextCmp>
                <TextInput
                    value={this.props.valueState}
                    onChangeText={(e) => this.props.onChangeState(e)}
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

export default State
