import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {dataDay} from '../../../../../../../Components/InitScreen/mockData';
import {normalize} from '../../../../../../../themes/FontSize';
import {TextCmp, Metrics} from '../../../../../../../themes';

export class SelectDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectDay: '',
    };
  }
  render() {
    const {selectDay} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerDropdown}>
          <Dropdown
            containerStyle={styles.dropdownStyles}
            onChangeText={value => {
              this.props.onChangeSelectDay(value);
            }}
            value={this.props.valueSelectDay}
            label="Select day"
            data={dataDay}
          />
        </View>
      </View>
    );
  }
}

export default SelectDay;
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end', marginLeft: 10},
  containerText: {
    fontSize: normalize(5),
    fontWeight: 'bold',
    color: 'white',
  },
  containerDropdown: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
  },
  dropdownStyles: {
    justifyContent: 'center',
    // padding: 3,
    flex: 1,
  },
});
