import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {normalize} from '../../../../../../themes/FontSize';
import {TextCmp} from '../../../../../../themes';

export default class Line5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerZipcode}>
          <TextCmp style={styles.containerText}>Zipcode</TextCmp>
          <TextInput
            value={this.props.valueZipcode}
            onChangeText={e => this.props.onChangeZipcode(e, 11)}
            style={styles.containerTextInput}
          />
        </View>
        <View style={styles.containerTmp}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  containerZipcode: {flex: 1, justifyContent: 'flex-end'},
  containerText: {
    fontSize: normalize(5),
    fontWeight: 'bold',
  },
  containerTextInput: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    marginTop: 5,
  },
  containerTmp: {
    flex: 1,
    marginLeft: 30,
    justifyContent: 'flex-end',
  },
});
