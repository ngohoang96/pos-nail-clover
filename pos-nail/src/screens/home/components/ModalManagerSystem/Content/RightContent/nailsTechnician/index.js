import React, { Component } from 'react'
import ButtonComponent from '../ButtonComponent'
export default class index extends Component {
    render() {
        const { onPress, containerStyles } = this.props
        return (
            <ButtonComponent
                containerStyles={containerStyles || {}}
                onPress={() => onPress()}
                title="Nails Technician" />
        )
    }
}
