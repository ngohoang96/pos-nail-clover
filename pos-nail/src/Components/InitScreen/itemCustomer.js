import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import themes from '../../config/themes';
import {normalize} from '../../themes/FontSize';
import {TextCmp} from '../../themes';

export default class ItemCustomer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          marginTop: 10,
          width: (themes.width * 1.1) / 5.6 + 3,
          height: ((themes.width * 1.1) / 5.6) * 0.65,
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
              borderRightWidth: 0.5,
              borderRightColor: '#F5B550',
            }}>
            <TextCmp
              style={{
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: normalize(4),
              }}>
              #100672
            </TextCmp>
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
              style={{
                width: ((themes.width * 1.1) / 5.6) * 0.2,
                height: ((themes.width * 1.1) / 5.6) * 0.2,
                borderRadius: 3,
              }}
              source={{
                uri:
                  'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
              }}></Image>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 3,
              }}>
              <TextCmp
                style={{
                  alignItems: 'center',
                  color: '#939393',
                  textAlign: 'left',
                  fontSize: normalize(5),
                }}>
                Van Hoang
              </TextCmp>
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
            <TextCmp
              style={{
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: normalize(5),
              }}>
              Frequent Customer
            </TextCmp>
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
                  alignItems: 'center',
                }}>
                <TextCmp
                  style={{
                    alignItems: 'center',
                    color: 'black',
                    marginLeft: 3,
                    fontSize: normalize(3.5),
                  }}>
                  SignIn:
                </TextCmp>
                <TextCmp
                  style={{
                    alignItems: 'center',
                    color: 'black',
                    fontSize: normalize(4),
                  }}>
                  12h57 AM
                </TextCmp>
              </View>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  paddingLeft: 1,
                  justifyContent: 'center',
                }}>
                <TextCmp
                  style={{
                    alignItems: 'center',
                    color: 'black',
                    marginLeft: 3,
                    fontSize: normalize(4),
                  }}>
                  Walk in
                </TextCmp>
              </View>
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderTopColor: '#F7BD61',
                  flex: 1,
                  paddingLeft: 1,
                  justifyContent: 'center',
                }}>
                <TextCmp
                  style={{
                    alignItems: 'center',
                    color: '#383E44',
                    marginLeft: 3,
                    fontSize: normalize(4),
                  }}>
                  Calling gei
                </TextCmp>
              </View>

              <View
                style={{
                  borderTopWidth: 0.5,
                  flexDirection: 'row',
                  borderTopColor: '#F7BD61',
                  paddingLeft: 1,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <TextCmp
                  style={{
                    alignItems: 'center',
                    color: 'black',
                    marginLeft: 3,
                    fontSize: normalize(4),
                  }}>
                  Any nail
                </TextCmp>
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
                <TextCmp
                  style={{
                    alignItems: 'center',
                    color: '#939393',
                    marginLeft: 3,
                    fontSize: normalize(4),
                  }}>
                  Waiting list
                </TextCmp>
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
                <TextCmp
                  style={{
                    alignItems: 'flex-start',
                    color: 'black',
                    marginLeft: 3,
                    fontSize: normalize(4),
                  }}>
                  Quick
                </TextCmp>
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
                <TextCmp
                  style={{
                    alignItems: 'center',
                    color: 'black',
                    marginLeft: 3,
                    fontSize: normalize(4),
                  }}>
                  Remove
                </TextCmp>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
