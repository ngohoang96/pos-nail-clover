import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { normalize } from '../../../../../../themes/FontSize'
import { TextCmp, Colors } from '../../../../../../themes'
export default class ButtonComponent extends PureComponent {

    render() {
        const { title, containerStyles, textStyles, onPress } = this.props
        return (
            <TouchableOpacity
                onPress={() => onPress()}
                activeOpacity={0.5}
                style={[styles.container, containerStyles]}>
                <TextCmp
                    style={[styles.txt, textStyles]}>
                    {title || "default"}
                </TextCmp>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: .5, borderColor: Colors.darkBlue,
        width: '50%', height: '20%', borderRadius: 5
    },
    txt: { flex: 1, color: 'white', fontSize: normalize(5), fontWeight: 'bold', textAlignVertical: 'center', textAlign: 'center' }
})