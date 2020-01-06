import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { TextCmp } from '../../../../themes'
import { normalize } from '../../../../themes/FontSize'
import themes from '../../../../config/themes'

export default class ItemGrid extends Component {
    // shouldComponentUpdate({ item: newItem }) {
    //     return newItem.isSelected != this.props.item.isSelected
    // }
    render() {
        const { item, index, onPress } = this.props
        return (
            <TouchableOpacity
                style={[styles.containerTouchItem, {
                    marginLeft: index % 2 === 0 ? '0.5%' : '1%',
                    backgroundColor: item.isSelected ? 'pink' : '#F5F5F5'
                }]}
                onPress={() => onPress()}
            >
                <TextCmp
                    style={styles.txtCenter}>
                    {item.name}</TextCmp>
                <TextCmp
                    style={{
                        fontSize: normalize(4),
                    }}>
                    Price: {item.price}$</TextCmp>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    txtCenter: { textAlign: 'center', fontSize: normalize(3.5) },
    containerTouchItem: {
        width: '49%',
        minHeight: ((((themes.width * 3) / 3.9) * 1) / 3.8) * 0.25,
        backgroundColor: '#F4F4F4',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        paddingVertical: 5,
        marginTop: 2
    },
})