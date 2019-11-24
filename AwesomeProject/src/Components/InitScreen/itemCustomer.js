import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import themes from '../../config/themes';
const styles = StyleSheet.create({});
import {normalize} from '../../utils/scales';
import {TextScale} from '../../utils/TextScale';

import ScaleTextLibrary from '../../utils/ScaleTextLibrary';
const H5 = 6;
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
          height:  themes.width*3/3.9*1/3.8*0.75,
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
              borderRightWidth : 0.5 , 
              borderRightColor : '#F5B550'
            }}>
            <ScaleTextLibrary
              styl={{
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
              font={H5}
              text="#100672"></ScaleTextLibrary>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 3,
              backgroundColor: '#F5F5F5',
              borderWidth: 0.5,
              borderColor: '#F5B550',
            }}>
            <Image
              style={{width: themes.width*3/3.9*1/3.8*0.2, height: themes.width*3/3.9*1/3.8*0.2, borderRadius: 3}}
              source={{
                uri:
                  'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
              }}></Image>
            <View style={{alignItems: 'center', justifyContent: 'center' , paddingLeft : 3}}>
              <ScaleTextLibrary
                styl={{
                  alignItems: 'center',
                  color: '#939393',
                  textAlign: 'left',
                }}
                font={H5+2}
                text="Van Hoang"></ScaleTextLibrary>
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
            <ScaleTextLibrary
              styl={{
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
              font={H5}
              text="Frequent Customer"></ScaleTextLibrary>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 3,
              borderBottomWidth: 0.5,
              borderBottomColor: '#F7BD61',
            }}>
            <View style={{flex: 3}}>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  flexDirection: 'row',
                  paddingHorizontal: 1,
                  alignItems : 'center'
                }}>
                  <ScaleTextLibrary
                  styl={{alignItems: 'center', color: 'black', marginLeft: 3,}}
                  font={H5}
                  text="SignIn:"></ScaleTextLibrary>
                <ScaleTextLibrary
                  styl={{alignItems: 'center', color: 'black'}}
                  font={H5}
                  text="12h57 AM"></ScaleTextLibrary>
              </View>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  paddingLeft: 1,
                  justifyContent : 'center'
                }}>
                <ScaleTextLibrary
                  styl={{
                    alignItems: 'center',
                    color: 'black', marginLeft: 3,
                  }}
                  font={H5}
                  text="Walk in"></ScaleTextLibrary>
              </View>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  paddingLeft: 1,
                  justifyContent : 'center'
                }}>
                <ScaleTextLibrary
                  styl={{
                    alignItems: 'center',
                    color: '#383E44', marginLeft: 3,
                  }}
                  font={H5}
                  text="Calling gei"></ScaleTextLibrary>
              </View>

              <View
                style={{
                  borderTopWidth: 0.5,
                  flexDirection: 'row',
                  borderTopColor: '#F7BD61',
                  paddingLeft: 1,
                  flex: 1,
                  alignItems : 'center'
                }}>
                <ScaleTextLibrary
                  styl={{
                    alignItems: 'center',
                    color: 'black', marginLeft: 3,
                  }}
                  font={H5}
                  text="Any nail"></ScaleTextLibrary>
              </View>
            </View>
            <View style={{flex: 1.8}}>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderRightWidth: 0.5,
                  borderRightColor: '#F7BD61',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  borderTopColor: '#F7BD61',
                  flex: 2,
                  borderLeftWidth: 0.5,
                  borderLeftColor: '#F7BD61',
                  paddingLeft: 1,
                }}>
                <ScaleTextLibrary
                  styl={{
                    alignItems: 'center',
                    color: '#939393', marginLeft: 3,
                  }}
                  font={H5-1}
                  text="Waiting list"></ScaleTextLibrary>
              </View>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderRightWidth: 0.5,
                  borderRightColor: '#F7BD61',
                  justifyContent: 'center',
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  borderLeftWidth: 0.5,
                  borderLeftColor: '#F7BD61',
                  paddingLeft: 1,
                }}>
                <ScaleTextLibrary
                  styl={{
                    alignItems: 'flex-start',
                    color: 'black', marginLeft: 3,
                  }}
                  font={H5-1}
                  text="Quick"></ScaleTextLibrary>
              </View>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderRightWidth: 0.5,
                  borderRightColor: '#F7BD61',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  borderLeftWidth: 0.5,
                  borderLeftColor: '#F7BD61',
                  paddingLeft: 1,
                }}>
                <ScaleTextLibrary
                  styl={{
                    alignItems: 'center',
                    color: 'black', marginLeft: 3,
                  }}
                  font = {H5-1} text = "Remove">
                </ScaleTextLibrary>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
