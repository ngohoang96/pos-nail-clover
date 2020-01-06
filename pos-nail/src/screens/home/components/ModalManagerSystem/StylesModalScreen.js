import { StyleSheet } from 'react-native'
import { normalize } from '../../../../themes/FontSize'
import { Metrics } from '../../../../themes'
export const StylesModal = StyleSheet.create({
    txtInput: {
        flex: 1, paddingVertical: 5, fontSize: normalize(4.5),
        textAlignVertical: 'center'
        , paddingLeft: 5
    }
})