import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { normalize } from '../../../../../../../../themes/FontSize';
import { TextCmp } from '../../../../../../../../themes';
import { Dropdown } from 'react-native-material-dropdown';
import { dataDay } from '../../mockData';

export class SelectDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // selectDay: '',
        };
    }
    render() {

        const { selectDay } = this.state
        return (
            <View style={styles.container}>
                <TextCmp
                    style={styles.containerText}></TextCmp>
                <View
                    style={styles.containerDropdown}>
                    <Dropdown
                        containerStyle={styles.dropdownStyles}
                        // animationDuration = {100}
                        onChangeText={(value) => {
                            this.props.onChangeSelectDay(value)
                        }}
                        value={this.props.valueSelectDay}
                        // overlayStyle = {{backgroundColor : "red"}}
                        label="Select day"
                        // pickerStyle={{backgroundColor: 'yellow'}}
                        itemTextStyle={{ alignContent: 'center' }}
                        data={dataDay}
                    />
                </View>
            </View>
        )
    }
}

export default SelectDay
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-end', marginLeft: 10 },
    containerText: {
        fontSize: normalize(5),
        fontWeight: 'bold', color: 'white'
    }, containerDropdown: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        marginTop: 5,
        paddingBottom: 10,
    },
    dropdownStyles: {
        justifyContent: 'center',
        // backgroundColor: 'pink',
        paddingLeft: 5,
        flex: 1,
    }
})