import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import themes from '../../../../../../../../config/themes';
import { normalize } from '../../../../../../../../themes/FontSize';
import { TextCmp } from '../../../../../../../../themes';


export default class itemRightServicesCustomer extends Component {
    render() {
        const { item, index, onPress } = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.8}
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
                        fontSize: normalize(5),
                    }}>
                    Price: {item.price}$</TextCmp>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({

    txtCenter: { textAlign: 'center', fontSize: normalize(5) },
    containerTouchItem: {
        width: '49.5%',
        minHeight: ((((themes.width * 3) / 3.9) * 1) / 3.8) * 0.3,
        backgroundColor: '#BEBEBE',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
});
