import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Metrics, TextCmp, Colors} from '../../themes';
import {normalize} from '../../themes/FontSize';
import themes from '../../config/themes';
import TechnicianRepander from './TechnicianRepander';

export default class CustomerItem extends Component {
  render() {
    const {item, updateSelectedCustomer} = this.props;
    return (
      <TechnicianRepander
        style={{
          backgroundColor: this.props.index % 2 == 0 ? 'orange' : 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        updateDropZone={updateSelectedCustomer}>
        <TouchableOpacity
          style={[styles.wrapper]}
          onPress={updateSelectedCustomer}>
          <View style={styles.name_view}>
            <TextCmp style={styles.txtName}>{item.name}</TextCmp>
          </View>
          <View style={styles.detail_view}>
            <TextCmp style={styles.txtDetail}>View detail</TextCmp>
          </View>
        </TouchableOpacity>
      </TechnicianRepander>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: ((Metrics.appWidth * 1.2) / 8.4) * 0.5,
    width: '100%',
  },
  detail_view: {
    // flex: 1,
    height: ((Metrics.appWidth * 1.2) / 8.4) * 0.15,
    borderWidth: 0.5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDetail: {
    fontSize: normalize(3.5),
    color: 'white',
    fontWeight: 'bold',
  },
  name_view: {
    // flex: 2,
    height: ((Metrics.appWidth * 1.2) / 8.4) * 0.35,
    borderWidth: 0.5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
    fontSize: normalize(5),
    color: 'white',
    fontWeight: 'bold',
  },
});
