import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Colors, TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';
import {iconsScroll} from '../../../../../assets';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClose = () => {
      if(onPressClose){
        this.props.onPressClose(false)
      }
  }
  render() {
    return (
      <View
        style={{
          flex: 0.7,
          backgroundColor: '#397DA4',
          paddingLeft: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextCmp style={{color: 'white', fontSize: normalize(7)}}>
          Nails Tech Clock In/ Clock Out
        </TextCmp>
        <TouchableOpacity
          onPress={()=>this.props.onPressClose(false)}
          style={{right: 10, height: 30, width: 30}}>
          <Image
          style={{height: '100%', width: '100%', tintColor: '#fff'}}
          source={iconsScroll.deletemodal}></Image>
          <Image
            style={{height: '100%', width: '100%', tintColor: '#4F6D7E',marginTop : 0.5 , position : 'absolute'}}
            source={iconsScroll.deletemodal}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

export default index;
