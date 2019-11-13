import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View , Image} from 'react-native';
import themes from '../../config/themes';
const WIDTH_COMPOENT_TECH = (((themes.width * 3) / 4.2) * 1) / 3.6
export default class ItemTech extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{borderColor: '#99CC00', borderWidth: 1,
      marginTop : 10}}>
        <View
          style={styl.container}>
          <Text
            style={styl.textName}>
            Nguyen Minh Hieu Bon
          </Text>
        </View>
        <View
          style={styl.container1}>
          <View
            style={styl.containerImg}>
            <Image
              style={{width: 70, height: 70, borderRadius: 50}}
              source={{
                uri:
                  'https://i.a4vn.com/2018/11/27/tong-hop-hinh-anh-cac-hotgirl-xinh-hot-nhat-nam-2018-7b8685.jpg',
              }}></Image>
          </View>
          <View style={{flex: 2, backgroundColor: '#F5F5F5'}}>
            <View
              style={{
                flex: 1,
                borderBottomColor: '#99CC00',
                flexDirection: 'row',
                paddingHorizontal: 3,
                borderBottomWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 14, alignItems: 'center', color: '#939393'}}>
                block in :{' '}
              </Text>
              <Text
                style={{fontSize: 14, alignItems: 'center', color: 'black'}}>
                12h57 AM
              </Text>
            </View>
            <View style={{flex : 1 , borderBottomWidth : 1 , borderBottomColor : '#99CC00'}}></View>
            <View style={{flex: 1}}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styl = StyleSheet.create({
    container : {
        height: 35,
        width: WIDTH_COMPOENT_TECH,
        backgroundColor: '#99CC00',
        justifyContent: 'center',
        paddingLeft: 3,
      } , 
      textName : {
        fontSize: 16,
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
      } , 
      container1 : {
        width: WIDTH_COMPOENT_TECH,
        height: 100,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
      } , 
      containerImg : {
        flex: 1.3,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#99CC00',
      }
});