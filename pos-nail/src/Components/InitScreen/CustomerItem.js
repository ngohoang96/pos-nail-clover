import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Metrics, TextCmp} from '../../themes';
import {normalize} from '../../themes/FontSize';

export default class CustomerItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {item} = this.props;
    return (
      <View style={styles.wrapper}>
        <View
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: '#CECECE',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextCmp
            style={{
              fontSize: normalize(5),
              color: 'white',
              fontWeight: 'bold',
            }}>
            {item.name}
          </TextCmp>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#CECECE',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextCmp
            style={{
              fontSize: normalize(3.5),
              color: 'white',
              fontWeight: 'bold',
            }}>
            View detail
          </TextCmp>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: ((Metrics.appWidth * 1.2) / 8.4) * 0.5,
    width: (Metrics.appWidth * 1.2) / 8.4,
    backgroundColor: this.props.index % 2 == 0 ? 'orange' : 'red',
    flex: 0,
  },
});
