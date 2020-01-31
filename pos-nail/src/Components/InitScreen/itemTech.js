import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { normalize } from '../../themes/FontSize';
import { TextCmp, Metrics, Colors } from '../../themes';
import { iconsScroll } from '../../assets';
export default class ItemTech extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={[
          {
            borderTopColor: 'orange',
            borderTopWidth: 2,

            width: '100%',
            height: '100%',
            backgroundColor: Colors.bgGray
          },
          this.props.containerStyle,
        ]}>
        <View style={{ flex: 2, flexDirection: 'row' }}>

          <View style={{
            height: (Metrics.appWidth * 1.2 / 8.4) * 0.35, width: (Metrics.appWidth * 1.2 / 8.4) * 0.35,
            borderRightWidth: 0.5, borderRightColor: 'gray', alignItems: 'center', justifyContent: "center",

          }}>
            <Image
              style={{
                width: '90%',
                height: '90%',
                borderRadius: 50
              }}
              source={iconsScroll.ninja}></Image>
          </View>
          <View style={{
            height: (Metrics.appWidth * 1.2 / 8.4) * 0.35, width: (Metrics.appWidth * 1.2 / 8.4) * 0.65
            , alignItems: 'center', justifyContent: 'center',
            borderRightWidth: 0.5, borderRightColor: 'gray',
          }}>
            <TextCmp style={styl.textName}>
              {this.props.nameTechnician || 'tên'}
            </TextCmp>
          </View>
        </View>
        <View style={{
          height: (Metrics.appWidth * 1.2 / 8.4) * 0.14, width: '100%', alignItems: 'center', justifyContent: 'center',
          borderTopWidth: 0.5, borderTopColor: 'orange', borderBottomWidth: 0.5, borderBottomColor: "gray",
          borderRightWidth: 0.5, borderRightColor: 'gray',
        }}>
          <TextCmp style={styl.txtViewDetail}>
            View detail
            </TextCmp>
        </View>
      </View>
    );
  }
}

const styl = StyleSheet.create({
  container: {
    backgroundColor: '#5F1AB7',
    justifyContent: 'center',
    paddingLeft: 3,
    flex: 1,
  },
  textName: {
    alignItems: 'center',
    // color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(5),
  },
  container1: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flex: 3,
  },
  containerImg: {
    flex: 1.5,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderRightColor: '#9BAB6A',
    borderLeftWidth: 0.5,
    borderLeftColor: '#9BAB6A',
  },
  txtViewDetail: {
    fontSize: normalize(3.5),
    fontWeight: 'bold',
  }
});
