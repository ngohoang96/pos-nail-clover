import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ComponentButton from './ComponentButton';
import {Metrics} from '../../../../../themes';
export default class index extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <View style={styles.containerContent}>
          <ComponentButton
            styleButton={{width: Metrics.appWidth * 0.6 * 0.95 * 0.2}}
            text={this.props.txt1 || 'a'}
            onPress={this.props.onPress}
          />
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            {this.props.txt3 != 'Sign In' ? (
              <ComponentButton
                styleButton={{width: Metrics.appWidth * 0.6 * 0.95 * 0.2}}
                text={this.props.txt2 || 'b'}
              />
            ) : null}
            <ComponentButton
              styleButton={{
                width: Metrics.appWidth * 0.6 * 0.95 * 0.2,
                marginHorizontal: 20,
              }}
              onPress={this.props.onPressFinish}
              text={this.props.txt3 || 'c'}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: '#408EBA',
    alignItems: 'center',
  },
  containerContent: {
    borderTopColor: 'white',
    borderTopWidth: 1,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
