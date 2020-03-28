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
    const {item, updateSelectedCustomer, toogleModal} = this.props;
    return (
      <TechnicianRepander
        style={{
          backgroundColor:
            item.status === 'waiting'
              ? Colors.orange
              : item.status === 'pending'
              ? 'green'
              : 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        updateDropZone={updateSelectedCustomer}>
        <View style={[styles.wrapper]}>
          <TouchableOpacity
            style={styles.name_view}
            onPress={updateSelectedCustomer}>
            <TextCmp style={styles.txtName}>{item.name}</TextCmp>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.detail_view}
            onPress={() => toogleModal()}>
            <TextCmp style={styles.txtDetail}>View detail</TextCmp>
          </TouchableOpacity>
        </View>
      </TechnicianRepander>
    );
  }
}
let wrapperHeight = ((Metrics.appWidth * 1.2) / 8.4) * 0.5;
const styles = StyleSheet.create({
  wrapper: {
    height: wrapperHeight,
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
