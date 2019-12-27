import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Metrics, TextCmp} from '../../../../../../../../themes';
import {normalize} from '../../../../../../../../themes/FontSize';
import {iconsScroll, testsIcons} from '../../../../../../../../assets';
import {Logg} from '../../../../../../../../utils';

class ItemScrollViewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(itemStaffs) {
    return itemStaffs.isSelected != this.props.itemStaffs.isSelected;
  }
  render() {
    const {itemStaffs} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.onPress(itemStaffs)}
        style={[styles.container]}>
        <View
          style={[
            styles.containerTitle,
            {
              backgroundColor: itemStaffs.isSelected ? '#5F1AB7' : '#95C700',
            },
            this.props.containerStyle,
          ]}>
          <TextCmp style={styles.txtTitle}>
            {itemStaffs.name || 'Any Nails Technician'}
          </TextCmp>
        </View>
        <View style={styles.containerContent}>
          <View style={styles.containerAvatar}>
            <Image style={styles.imgAvatar} source={testsIcons.a1Icon} />
          </View>
          <View style={styles.containerRightContent}>
            <View style={styles.containerClockIn}>
              <TextCmp style={styles.txt1}>Clock in:</TextCmp>
              <TextCmp style={styles.txtBold}>9:30 AM</TextCmp>
            </View>
            <View style={styles.containerC}>
              <TextCmp style={styles.txt1}>C:</TextCmp>
              <TextCmp style={styles.txtBold}>=0</TextCmp>
            </View>
            <View style={styles.containerToday}>
              <TextCmp style={styles.txt1}>Today Appt:</TextCmp>
              <TextCmp style={styles.txtBold}>=0</TextCmp>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ItemScrollViewModal;
const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: ((Metrics.appWidth * 0.9) / 5.6) * 0.65,

    marginTop: 10,
    marginHorizontal: 5,
  },
  containerTitle: {
    flex: 1,
    backgroundColor: '#95C700',
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
  },
  imgAvatar: {
    width: (((Metrics.appWidth * 0.9) / 5.6) * 0.7) / 2,
    height: (((Metrics.appWidth * 0.9) / 5.6) * 0.7) / 2,
    borderRadius: 50,
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

    justifyContent: 'center',
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
