import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import themes from '../../config/themes';
import ScaleTextLibrary from '../../Utils/ScaleTextLibrary';

const H1 = 16;
const H2 = 14;
const H3 = 12;
const H5 = 8;

import {TextScale} from '../../Utils/TextScale';
export default class ItemTech extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          borderBottomColor: '#9BAB6A',
          borderBottomWidth: 0.5,
          marginTop: 10,
          width: '100%',
          height: themes.width*3/3.9*0.9/3.8*0.75
        }}>
        <View style={styl.container}>
          <ScaleTextLibrary
            styl={styl.textName}
            font={H5}
            text={this.props.nameTechnician}></ScaleTextLibrary>
        </View>
        <View style={styl.container1}>
          <View style={styl.containerImg}>
            <Image
              style={{
                width: themes.width*3/3.9*0.9/3.8*0.3,
                height: themes.width*3/3.9*0.9/3.8*0.3,
                borderRadius: 50,
              }}
              source={{
                uri:
                  'https://i.a4vn.com/2018/11/27/tong-hop-hinh-anh-cac-hotgirl-xinh-hot-nhat-nam-2018-7b8685.jpg',
              }}></Image>
          </View>
          <View style={{flex: 2, backgroundColor: '#F5F5F5'}}>
            <View
              style={{
                flex: 1,
                borderBottomColor: '#9BAB6A',
                flexDirection: 'row',
                paddingHorizontal: 3,
                borderBottomWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth : 0.5 , 
                borderRightColor : '#9BAB6A'
              }}>
              <ScaleTextLibrary
                styl={{alignItems: 'center', color: 'black'}}
                font={H5 - 1}
                text="12h34 Am"></ScaleTextLibrary>
            </View>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 0.5,
                borderBottomColor: '#9BAB6A',
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth : 0.5 , 
                borderRightColor : '#9BAB6A'
              }}>
              <ScaleTextLibrary
                styl={{alignItems: 'center', color: 'black'}}
                font={H5 - 1}
                text="c:=0"></ScaleTextLibrary>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center',
              borderRightWidth : 0.5 , 
              borderRightColor : '#9BAB6A'}}>
              <ScaleTextLibrary
                styl={{alignItems: 'center', color: 'black'}}
                font={H5 - 1}
                text="Today Appt:=0"></ScaleTextLibrary>
            </View>
          </View>
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
    color: 'white',
    fontWeight: 'bold',
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
    borderLeftWidth : 0.5 , 
    borderLeftColor : '#9BAB6A'
  },
});
