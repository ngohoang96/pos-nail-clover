import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Metrics, TextCmp} from '../../../../../../../../themes';
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
        <TextCmp style={styles.txtTitle}>
          Please Select Perfer Nails Technician
        </TextCmp>
        <TouchableOpacity
          onPress={() => this.props.onPress()}
          style={styles.containerBtn}>
          <Image
            style={styles.imgShadow}
            source={iconsScroll.deletemodal}></Image>
          <Image style={styles.img} source={iconsScroll.deletemodal}></Image>
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
  containerBtn: {
    right: 20,
    height: 30,
    width: 30,
    position: 'absolute',
  },
  imgShadow: {height: '100%', width: '100%', tintColor: '#fff'},
  img: {
    height: '100%',
    width: '100%',
    tintColor: '#4F6D7E',
    marginTop: 0.5,
    position: 'absolute',
  },
});
