import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../themes/FontSize';
import {TextCmp} from '../../themes';

// import ViewOverflow from 'react-native-view-overflow';
export default class ItemTech extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={[
          {
            borderBottomColor: '#9BAB6A',
            borderBottomWidth: 0.5,
            width: (themes.width * 0.9) / 5.6 + 3,
            height: ((themes.width * 0.9) / 5.6) * 0.65,
          },
          this.props.containerStyle,
        ]}>
        <View style={styl.container}>
          <TextCmp style={styl.textName}>
            {this.props.nameTechnician || 'tên'}
          </TextCmp>
        </View>
        <View style={styl.container1}>
          <View style={styl.containerImg}>
            <Image
              style={{
                width: ((themes.width * 0.9) / 5.6) * 0.3,
                height: ((themes.width * 0.9) / 5.6) * 0.3,
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
                borderRightWidth: 0.5,
                borderRightColor: '#9BAB6A',
              }}>
              <TextCmp
                style={{
                  alignItems: 'center',
                  color: 'black',
                  fontSize: normalize(4),
                }}>
                12h34 Am
              </TextCmp>
            </View>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 0.5,
                borderBottomColor: '#9BAB6A',
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 0.5,
                borderRightColor: '#9BAB6A',
              }}>
              <TextCmp
                style={{
                  alignItems: 'center',
                  color: 'black',
                  fontSize: normalize(4),
                }}>
                c:=0
              </TextCmp>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 0.5,
                borderRightColor: '#9BAB6A',
              }}>
              <TextCmp
                style={{
                  alignItems: 'center',
                  color: 'black',
                  fontSize: normalize(4),
                }}>
                Today Appt:=0
              </TextCmp>
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
});
