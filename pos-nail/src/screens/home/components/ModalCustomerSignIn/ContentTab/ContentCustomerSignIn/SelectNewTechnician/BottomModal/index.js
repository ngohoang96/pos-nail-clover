import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ComponentButton from '../../../../BottomButton/ComponentButton';
import {Metrics} from '../../../../../../../../themes';
export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ComponentButton onPress={this.props.onPressClose} text="Close" />
        <View />
        <ComponentButton onPress={this.props.onPressFinish} text="Finish" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Metrics.appWidth * 0.8,
    height: Metrics.appHeight * 0.1,
    backgroundColor: '#397DA4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
