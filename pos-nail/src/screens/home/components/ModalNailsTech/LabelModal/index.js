import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {Colors, TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';
import {iconsScroll} from '../../../../../assets';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClose = () => {
    if (onPressClose) {
      this.props.onPressClose(false);
    }
  };
  render() {
    return (
      <View style={[styles.container, this.props.containerStyles]}>
        <TextCmp style={[styles.txtTitle, this.props.textStyles]}>
          {this.props.title || 'Nails Tech Clock In/ Clock Out'}
        </TextCmp>
        <TouchableOpacity
          onPress={() => this.props.onPressClose()}
          style={{right: 10, height: 30, width: 30}}>
          <Image
            style={{height: '100%', width: '100%', tintColor: '#fff'}}
            source={iconsScroll.deletemodal}></Image>
          <Image
            style={{
              height: '100%',
              width: '100%',
              tintColor: '#4F6D7E',
              marginTop: 0.5,
              position: 'absolute',
            }}
            source={iconsScroll.deletemodal}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: Colors.backgroundModal,
    paddingLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  txtTitle: {fontSize: normalize(7)},
});
