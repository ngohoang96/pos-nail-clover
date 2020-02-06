import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {TextCmp} from '../../../../themes';
import {styles} from '../styles';
import {homeIcon} from '../../../../assets';
export default class NailTechCard extends Component {
  render() {
    const {item, unselectedTechnician} = this.props;
    return (
      <View style={styles.wrappername}>
        <TextCmp>Nail Tech: {item.name}</TextCmp>
        <TouchableOpacity
          style={styles.btn_remove}
          onPress={() => unselectedTechnician(item)}>
          <Image source={homeIcon.delete} style={{width: 15, height: 15}} />
        </TouchableOpacity>
      </View>
    );
  }
}
