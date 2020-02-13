import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {normalize} from '../../../../../../themes/FontSize';
import {iconsScroll} from '../../../../../../assets';
import {TextCmp, Metrics, Colors} from '../../../../../../themes';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onPress} = this.props;
    return (
      <View style={styles.container}>
        <TextCmp style={styles.txtTitle}>Please Select Perfer Service</TextCmp>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Image style={styles.img} source={iconsScroll.deletemodal} />
          <Image style={styles.img1} source={iconsScroll.deletemodal} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: Colors.backgroundModal,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Colors.line,
  },
  txtTitle: {fontSize: normalize(6)},
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
