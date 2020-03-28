import React, {Component} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextCmp, Metrics} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';
import {homeIcon} from '../../../../../../assets';
import {Logg} from '../../../../../../utils';
import moment from 'moment';

export default class SelectTechnicianItem extends Component {
  shouldComponentUpdate({selected: newSelected, item: newItem}) {
    return newSelected !== this.props.selected || newItem !== this.props.item;
  }
  render() {
    const {item, index, selected} = this.props;
    const {clockInTime, takeCount, name, apptCount} = item;
    let formatTime = clockInTime.replace(/[/Date()]/g, '');
    let time = moment(parseFloat(formatTime)).format('HH:mm');

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.btn}
        onPress={() => this.props.updateListSelected(item, index)}>
        <View
          style={[
            styles.wrapper_name,
            {
              backgroundColor: selected ? '#5F1AB7' : '#95C700',
            },
          ]}>
          <TextCmp style={styles.txtTitle}>{name}</TextCmp>
        </View>
        <View style={styles.containerContent}>
          <View style={styles.containerAvatar}>
            <Image style={styles.imgAvatar} source={homeIcon.avatar} />
          </View>
          <View style={styles.containerRightContent}>
            <View style={styles.containerClockIn}>
              <TextCmp style={styles.txt1}>Clock in:</TextCmp>
              <TextCmp style={styles.txtBold}> {time}</TextCmp>
            </View>
            <View style={styles.containerC}>
              <TextCmp style={styles.txt1}>C:</TextCmp>
              <TextCmp style={styles.txtBold}>= {takeCount}</TextCmp>
            </View>
            <View style={styles.containerToday}>
              <TextCmp style={styles.txt1}>Today Appt:</TextCmp>
              <TextCmp style={styles.txtBold}>= {apptCount}</TextCmp>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    width: '32%',
    height: ((Metrics.appWidth * 0.9) / 5.6) * 0.65,

    marginTop: 10,
    marginHorizontal: 5,
  },
  wrapper_name: {
    flex: 1,
    backgroundColor: '#93EC94',
    padding: 5,
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: normalize(5),
    color: 'white',
    fontWeight: 'bold',
  },
  containerContent: {flex: 4, backgroundColor: 'white', flexDirection: 'row'},
  containerAvatar: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#95C700',
    padding: 5,
  },
  imgAvatar: {
    width: (((Metrics.appWidth * 0.9) / 5.6) * 0.7) / 2,
    height: (((Metrics.appWidth * 0.9) / 5.6) * 0.7) / 2,
  },
  containerRightContent: {
    flex: 2,
    backgroundColor: 'green',
    borderRightWidth: 1,
    borderRightColor: '#95C700',
  },
  containerClockIn: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#95C700',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt1: {fontSize: normalize(4), color: 'black'},
  txtBold: {
    fontSize: normalize(4),
    color: 'black',
    fontWeight: 'bold',
  },
  containerC: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#95C700',
    paddingLeft: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerToday: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#95C700',

    justifyContent: 'flex-start',
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
