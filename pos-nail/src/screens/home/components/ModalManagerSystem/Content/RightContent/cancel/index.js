import React, { Component } from 'react'
import ButtonComponent from '../ButtonComponent'
export default class index extends Component {
    render() {
        const { onPress, containerStyles } = this.props
        return (
            <ButtonComponent
                containerStyles={{ width: '100%' }}
                onPress={() => onPress()}
                title="Cancel" />
        )
    }
}
