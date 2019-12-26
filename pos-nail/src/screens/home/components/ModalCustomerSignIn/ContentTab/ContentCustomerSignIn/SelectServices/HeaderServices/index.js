import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {TextCmp, Metrics} from '../../../../../../../../themes';
import {iconsScroll} from '../../../../../../../../assets';
import {normalize} from '../../../../../../../../themes/FontSize';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextCmp style={styles.txtTitle}>Please Select Perfer Service</TextCmp>
        <TouchableOpacity
          onPress={() => this.props.onPress()}
          style={styles.btn}>
          <Image style={styles.img} source={iconsScroll.deletemodal}></Image>
          <Image style={styles.img1} source={iconsScroll.deletemodal}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.appWidth * 0.8,
    height: Metrics.appHeight * 0.1,
    backgroundColor: '#397DA4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txtTitle: {fontSize: normalize(6), color: '#fff'},
  btn: {
    right: 20,
    height: 30,
    width: 30,
    position: 'absolute',
  },
  img: {height: '100%', width: '100%', tintColor: '#fff'},
  img1: {
    height: '100%',
    width: '100%',
    tintColor: '#4F6D7E',
    marginTop: 0.5,
    position: 'absolute',
  },
});
