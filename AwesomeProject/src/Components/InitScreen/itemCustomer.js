import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import themes from '../../config/themes';
const styles = StyleSheet.create({});
import {normalize} from '../../Utils/scales';
import {TextScale} from '../../Utils/TextScale';
export default class ItemCustomer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          marginTop: 10,
          width: '100%',
          height: (themes.height * 1) / 5,
          flexDirection: 'row',
          backgroundColor: '#F5F5F5',
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#F39C12',
              justifyContent: 'center',
              paddingLeft: 3,
              flex: 1,
            }}>
            <TextScale
              Textstyle={{
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
              lable="#100672"
              font={4}></TextScale>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 3,
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: '#F7BD61',
            }}>
            <Image
              style={{width: '50%', height: '50%', borderRadius: 10}}
              source={{
                uri:
                  'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
              }}></Image>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TextScale
                font={5}
                lable="Van Hoang"
                Textstyle={{
                  alignItems: 'center',
                  color: '#939393',
                  textAlign: 'center',
                }}></TextScale>
            </View>
          </View>
        </View>
        <View style={{flex: 2.3}}>
          <View
            style={{
              height: 35,
              backgroundColor: '#F39C12',
              justifyContent: 'center',
              paddingLeft: 3,
              flex: 1,
            }}>
            <TextScale
              lable="Frequent Customer"
              font={5}
              Textstyle={{
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}></TextScale>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 3,
              borderBottomWidth: 1,
              borderBottomColor: '#F7BD61',
            }}>
            <View style={{flex: 3}}>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  flexDirection: 'row',
                  paddingLeft : 1
                }}>
                <TextScale
                  Textstyle={{alignItems: 'center', color: 'black'}}
                  font={4}
                  lable="12h57 AM"></TextScale>
              </View>
              <View
                style={{borderTopWidth: 1, borderTopColor: '#F7BD61', flex: 1,
                paddingLeft : 1}}>
                <TextScale
                  font={4}
                  lable="Walk in"
                  Textstyle={{
                    alignItems: 'center',
                    color: 'black',
                  }}></TextScale>
              </View>
              <View
                style={{borderTopWidth: 1, borderTopColor: '#F7BD61', flex: 1,
                paddingLeft : 1}}>
                <TextScale
                  font={4}
                  lable="Calling gei"
                  Textstyle={{
                    alignItems: 'center',
                    color: 'black',
                  }}></TextScale>
              </View>

              <View
                style={{
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  borderTopColor: '#F7BD61',
                  paddingLeft : 1,
                  flex: 1,
                }}>
                <TextScale
                  font={4}
                  lable="Any nail"
                  Textstyle={{
                    alignItems: 'center',
                    color: 'black',
                  }}></TextScale>
              </View>
            </View>
            <View style={{flex: 1.8}}>
              <View
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderRightColor: '#F7BD61',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  borderTopColor: '#F7BD61',
                  flex: 2,
                  borderLeftWidth: 1,
                  borderLeftColor: '#F7BD61',
                  paddingLeft : 1,
                }}>
                <TextScale
                  font={4}
                  lable="Waiting list"
                  Textstyle={{
                    alignItems: 'center',
                    color: '#939393',
                  }}></TextScale>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderRightColor: '#F7BD61',
                  justifyContent: 'center',
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  borderLeftWidth: 1,
                  borderLeftColor: '#F7BD61',
                  paddingLeft : 1,
                }}>
                <TextScale
                  font={4}
                  lable="Quick"
                  Textstyle={{
                    alignItems: 'flex-start',
                    color: 'black',
                  }}></TextScale>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderRightColor: '#F7BD61',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  borderLeftWidth: 1,
                  borderLeftColor: '#F7BD61',
                  paddingLeft : 1,
                }}>
                <TextScale
                  font={4}
                  lable="Remove"
                  Textstyle={{
                    alignItems: 'center',
                    color: 'black',
                  }}></TextScale>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
