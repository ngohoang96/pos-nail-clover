import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {iconsScroll} from '../../../../../../assets';
import {Metrics, TextCmp, Colors} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';

export default class HeaderModalSelectTechnician extends Component {
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
          onPress={() => this.props.onClose()}
          style={styles.containerBtn}>
          <Image style={styles.imgShadow} source={iconsScroll.deletemodal} />
          <Image style={styles.img} source={iconsScroll.deletemodal} />
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
    borderBottomWidth: 1,
    borderColor: Colors.line,
  },
  txtTitle: {fontSize: normalize(6)},
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
