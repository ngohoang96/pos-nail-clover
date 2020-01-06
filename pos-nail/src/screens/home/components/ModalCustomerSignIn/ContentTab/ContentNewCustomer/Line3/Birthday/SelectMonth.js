import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { normalize } from '../../../../../../../../themes/FontSize';
import { TextCmp } from '../../../../../../../../themes';
import { Dropdown } from 'react-native-material-dropdown';
import { dataMonth } from '../../mockData';

export class SelectMonth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // selectMonth: '',
        };
    }
    render() {
        const { selectMonth } = this.state
        return (
            <View style={styles.container}>
                <TextCmp style={styles.containerText}>
                    Birth Day </TextCmp>
                <View
                    style={styles.containerDropdown}>
                    <Dropdown
                        containerStyle={styles.dropdownStyles}
                        onChangeText={(value) => {
                            this.props.onChangeSelectMonth(value)
                        }}
                        value={this.props.valueSelectMonth}
                        label="Select month"
                        itemTextStyle={{ alignContent: 'center' }}
                        data={dataMonth}
                    />
                </View>

            </View>
        )
    }
}

export default SelectMonth
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-end' },
    containerText: {
        fontSize: normalize(5),
        fontWeight: 'bold', color: 'white'
    },
    containerDropdown: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        marginTop: 5,
        paddingBottom: 10,
    },
    dropdownStyles: {
        justifyContent: 'center',
        paddingLeft: 5,
        flex: 1,
    }
})