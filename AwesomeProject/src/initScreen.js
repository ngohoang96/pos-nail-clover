/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  PixelRatio,
  KeyboardAvoidingView,
} from 'react-native';
import themes from './config/themes';
import {data, items, items1} from './Components/InitScreen/mockData';
import {Button} from './Components/InitScreen';
import Button2 from './Components/InitScreen/Button2';
import ItemTech from './Components/InitScreen/itemTech';
import ItemCustomer from './Components/InitScreen/itemCustomer';
import {styles} from './Components/InitScreen/styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GridList from 'react-native-grid-list';
import {normalize} from './Utils/scales';
import {TextScale} from './Utils/TextScale';

import ScaleTextLibrary from './Utils/ScaleTextLibrary';
import {scaleText} from 'react-native-text';

const sty = scaleText({
  deviceBaseWidth: 375,
  fontSize: 10,
  lineHeight: 14 * 1.2,
}); //

const H5 = 7;
const H6 = 5;
class InitScreen extends Component {
  renderItem = ({item, index}) => (
    <TouchableOpacity style={styles.renderItemGridList}>
      <ScaleTextLibrary
        styl={{textAlign: 'center'}}
        font={H5}
        text={item.code}></ScaleTextLibrary>
      <ScaleTextLibrary font={H5} text={index}></ScaleTextLibrary>
    </TouchableOpacity>
  );
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{flex: 0.8, borderRightWidth: 1, borderRightColor: '#878787'}}>
          {/* <KeyboardAvoidingView style = {{flex : 1}}  behavior= 'height'> */}
          <View style={styles.bgWhite_flex1}>
            <View
              style={[
                styles.bgWhite_flex1,
                {padding: 3, justifyContent: 'center'},
              ]}>
              <ScaleTextLibrary
                styl={[styles.textPaymentCart]}
                font={H5 + 1}
                text="Payment Cart"></ScaleTextLibrary>
            </View>
            <View style={styles.viewService}>
              <ScaleTextLibrary
                styl={[styles.textService]}
                font={H5}
                text="Service"></ScaleTextLibrary>
            </View>
          </View>
          <View
            style={{
              flex: 6,
              backgroundColor: 'white',
              paddingHorizontal: 3,
              paddingVertical: 1,
            }}>
            <View style={{flex: 4}}>
              {/* Payment */}

              <ScrollView style={{flex: 0.8}}>
                {[1, 2, 3, 4, 5, 6,7].map(item => {
                  return (
                    <View
                      style={{
                        height: '26%',
                        flexDirection: 'row',
                        width: '100%',
                        borderBottomColor: '#EDEDED',
                        borderBottomWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                        }}>
                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                          <ScaleTextLibrary
                            font={H5 - 1}
                            text="Organic"></ScaleTextLibrary>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <ScaleTextLibrary
                            font={H5 - 1}
                            text="Rejuventation"></ScaleTextLibrary>
                        </View>
                        <TouchableOpacity
                          style={{flex: 1, justifyContent: 'flex-start'}}>
                          <Image
                            resizeMethod="scale"
                            source={require('./assets/images/trash.png')}
                            style={{
                              width: normalize(H5),
                              height: normalize(H5),
                              tintColor: 'gray',
                            }}></Image>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flex: 0.7,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#005E96',
                            borderRadius: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 2,
                            paddingVertical: 3,
                            marginLeft: 1,
                          }}>
                          <ScaleTextLibrary
                            styl={{
                              color: 'white',
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}
                            font={H5 - 2.5}
                            text="Le Thu Thuy"></ScaleTextLibrary>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex: 0.8}}>
                        <ScaleTextLibrary
                          styl={{marginLeft: 1}}
                          font={H5 - 1}
                          text="Guest  x1"></ScaleTextLibrary>
                      </View>
                      <View
                        style={{
                          flex: 0.9,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '30%',
                        }}>
                        <TextInput
                          style={{
                            width: '48%',
                            borderWidth: 0.5,
                            borderColor: '#BEBEBE',
                            paddingVertical: -10,
                            height: '100%',
                            fontSize: normalize(H6),
                          }}></TextInput>
                        <TextInput
                          style={{
                            width: '48%',
                            borderWidth: 0.5,
                            borderColor: '#BEBEBE',
                            paddingVertical: -10,
                            height: '100%',
                            marginLeft: 2,
                            fontSize: normalize(H6),
                          }}></TextInput>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              {/* Payment */}
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <ScaleTextLibrary
                    styl={[styles.text1, {flex: 1}]}
                    font={H5}
                    text="Subtotal"></ScaleTextLibrary>
                  <ScaleTextLibrary
                    styl={{
                      color: '#383E44',
                      flex: 0.3,
                      textAlign: 'right',
                    }}
                    font={H5}
                    text="($0.00)"></ScaleTextLibrary>
                </View>
                <View style={[styles.containerView1, {flex: 1}]}>
                  <View
                    style={[styles.container2, {paddingRight: 10, flex: 1}]}>
                    <ScaleTextLibrary
                      styl={[styles.text1, {flex: 1}]}
                      font={H5}
                      text="Coupon"></ScaleTextLibrary>

                    <TextInput
                      style={[
                        styles.textIpBasic,
                        {flex: 1, fontSize: normalize(H6), marginLeft: 3},
                      ]}></TextInput>
                    <View style={{flex: 0.7}}></View>
                  </View>
                  <View style={{flex: 0.3}}>
                    <ScaleTextLibrary
                      styl={{
                        alignItems: 'center',
                        color: '#383E44',
                        textAlign: 'right',
                      }}
                      font={H5}
                      text="($0.00)"></ScaleTextLibrary>
                  </View>
                </View>
                <View style={[styles.containerView1, {flex: 1, marginTop: 2}]}>
                  <View
                    style={[styles.container2, {paddingRight: 10, flex: 1}]}>
                    <ScaleTextLibrary
                      styl={[styles.text1, {flex: 1}]}
                      font={H5}
                      text="Gift cart"></ScaleTextLibrary>

                    <TextInput
                      style={[
                        styles.textIpBasic,
                        {flex: 1, fontSize: normalize(H6), marginLeft: 3},
                      ]}></TextInput>
                    <TextInput
                      style={[
                        styles.textIpBasic,
                        {flex: 0.5, fontSize: normalize(H6), marginLeft: 3},
                      ]}></TextInput>
                  </View>
                  <View style={{flex: 0.3}}>
                    <ScaleTextLibrary
                      styl={{
                        alignItems: 'center',
                        color: '#383E44',
                        textAlign: 'right',
                      }}
                      font={H5}
                      text="($0.00)"></ScaleTextLibrary>
                  </View>
                </View>
                {/* <TextInput style = {{width : themes.width*1/12  , borderWidth : .5 , borderColor : '#BEBEBE' , paddingVertical : -3, marginTop : 5}}></TextInput> */}
                <View style={[styles.containerView1, {flex: 1, marginTop: 2}]}>
                  <View
                    style={[styles.container2, {paddingRight: 10, flex: 1}]}>
                    <ScaleTextLibrary
                      styl={[styles.text1, {flex: 1}]}
                      font={H5}
                      text="Tips"></ScaleTextLibrary>

                    <TextInput
                      style={[
                        styles.textIpBasic,
                        {flex: 1, fontSize: normalize(H6), marginHorizontal: 2},
                      ]}></TextInput>

                    <ScaleTextLibrary
                      styl={[styles.text1, {flex: 1.2}]}
                      font={H5}
                      text="Ticket"></ScaleTextLibrary>
                    <TextInput
                      style={[
                        styles.textIpBasic,
                        {flex: 2, fontSize: normalize(H6), marginLeft: 2},
                      ]}></TextInput>
                  </View>
                  <View style={{flex: 0.3}}>
                    <ScaleTextLibrary
                      styl={{
                        alignItems: 'center',
                        color: '#383E44',
                        textAlign: 'right',
                      }}
                      font={H5}
                      text="($0.00)"></ScaleTextLibrary>
                  </View>
                </View>

                <View style={[styles.containerView1, {flex: 1, marginTop: 2}]}>
                  <View
                    style={[styles.container2, {flex: 1, paddingRight: 10}]}>
                    <ScaleTextLibrary
                      styl={[styles.text1, {flex: 1}]}
                      font={H5}
                      text="Discount(%)"></ScaleTextLibrary>

                    <TextInput
                      style={[
                        styles.textIpBasic,
                        {flex: 0.6, fontSize: normalize(H6), marginBottom: 1},
                      ]}></TextInput>

                    <ScaleTextLibrary
                      styl={[styles.text1, {flex: 1}]}
                      font={H5}
                      text="(Fix amount)"></ScaleTextLibrary>
                  </View>

                  <View style={{flex: 0.3}}>
                    <ScaleTextLibrary
                      styl={{
                        alignItems: 'center',
                        color: '#383E44',
                        textAlign: 'right',
                      }}
                      font={H5}
                      text="($0.00)"></ScaleTextLibrary>
                  </View>
                </View>

                <View style={[styles.containerView1, {flex: 1}]}>
                  <View
                    style={[styles.container2, {paddingRight: 10, flex: 1}]}>
                    <ScaleTextLibrary
                      styl={[styles.text1, {flex: 1}]}
                      font={H5}
                      text="Reward"></ScaleTextLibrary>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        styles.btn1,
                        {
                          backgroundColor: '#BEBEBE',
                          flex: 0.8,
                          marginLeft: 3,
                        },
                      ]}>
                      <ScaleTextLibrary
                        styl={{color: 'black'}}
                        font={H5}
                        text="($0.00)"></ScaleTextLibrary>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        styles.btn1,
                        {
                          marginLeft: 3,
                          backgroundColor: 'white',
                          flex: 0.8,
                          width: '75%',
                        },
                      ]}>
                      <ScaleTextLibrary
                        styl={{}}
                        font={H5}
                        text="Redoom"></ScaleTextLibrary>
                    </TouchableOpacity>
                  </View>

                  <View style={{flex: 0.3}}>
                    <ScaleTextLibrary
                      styl={{color: '#383E44', textAlign: 'right'}}
                      font={H5}
                      text="($0.00)"></ScaleTextLibrary>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <View style={{flex: 1}}>
                    <ScaleTextLibrary
                      styl={{
                        alignItems: 'center',
                        color: '#383E44',
                        fontWeight: 'bold',
                      }}
                      font={H5}
                      text="Total"></ScaleTextLibrary>
                  </View>
                  <View style={{flex: 0.3}}>
                    <ScaleTextLibrary
                      styl={{
                        color: 'black',
                        textAlign: 'right',
                        fontWeight: 'bold',
                      }}
                      font={H5}
                      text="$64.0"></ScaleTextLibrary>
                  </View>
                </View>
                <View style={{alignItems: 'flex-start', flex: 1}}>
                  <ScaleTextLibrary
                    styl={{color: '#383E44'}}
                    font={H5}
                    text="Fast With Cash"></ScaleTextLibrary>
                </View>
                <View style={{marginTop: 1, flex: 4}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 1,
                      flex: 1,
                    }}>
                    <Button
                      Textstyle={{color: 'black'}}
                      lable={'$64.00'}
                      bg={'white'}></Button>
                    <Button
                      Textstyle={{color: 'black'}}
                      lable={'$65.00'}
                      bg={'white'}></Button>
                    <Button
                      Textstyle={{color: 'black'}}
                      lable={'$70.00'}
                      bg={'white'}></Button>
                    <Button
                      Textstyle={{color: 'gray'}}
                      lable={'Custom Price'}
                      bg={'white'}></Button>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 1,
                      flex: 1,
                    }}>
                    <Button
                      Textstyle={{color: 'black'}}
                      lable={'Cancel'}
                      bg={'white'}></Button>
                    <Button
                      Textstyle={{color: 'black'}}
                      lable={'Gift Card'}
                      bg={'#6495ED'}></Button>
                    <Button
                      Textstyle={{color: 'black'}}
                      lable={'Charge'}
                      bg={'#FF69B4'}></Button>
                    <Button
                      Textstyle={{color: 'black'}}
                      lable={'Cash'}
                      bg={'#FFA500'}></Button>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      flex: 1,
                      borderTopWidth: 1,
                      borderTopColor: 'gray',
                      paddingTop: 1,
                      marginTop: 1,
                    }}>
                    <TouchableOpacity
                      style={{
                        width: '30%',
                        height: '90%',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <ScaleTextLibrary
                        styl={{color: '#383E44'}}
                        font={H5 - 1}
                        text="Cancel"></ScaleTextLibrary>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: '30%',
                        height: '90%',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <ScaleTextLibrary
                        styl={{color: '#383E44'}}
                        font={H5 - 1}
                        text="Service"></ScaleTextLibrary>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* </KeyboardAvoidingView> */}
        </View>
        <View style={{flex: 3, backgroundColor: 'white'}}>
          <View
            style={{flex: 6, backgroundColor: 'white', flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {/* Technician */}
              <View style={{flex: 0.9, backgroundColor: 'white'}}>
                <View
                  style={{
                    height: themes.height / 20,
                    width: '100%',
                    padding: 3,
                    justifyContent: 'center',
                  }}>
                  <ScaleTextLibrary
                    styl={{
                      alignItems: 'center',
                      color: '#383E44',
                    }}
                    font={H5 + 1}
                    text="Technician Turn"></ScaleTextLibrary>
                </View>
                <ScrollView style={{flex: 1}}>
                  {[1].map(item => {
                    return (
                      <View style={{marginHorizontal: 3}}>
                        <ItemTech></ItemTech>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              {/* Technician */}
              {/**Customer */}
              <View style={{flex: 1, paddingLeft: 2}}>
                <View
                  style={{
                    height: themes.height / 20,
                    width: '100%',
                    padding: 3,
                    justifyContent: 'center',
                  }}>
                  <ScaleTextLibrary
                    styl={{
                      alignItems: 'center',
                      color: '#383E44',
                    }}
                    font={H5 + 1}
                    text="Customer"></ScaleTextLibrary>
                </View>
                <ScrollView style={{flex: 1}}>
                  {[1].map(item => {
                    return <ItemCustomer></ItemCustomer>;
                  })}
                </ScrollView>
              </View>

              {/**Customer */}

              {/**QuickMenu */}
              <View
                style={{backgroundColor: 'white', marginLeft: 10, flex: 0.5}}>
                <View
                  style={{
                    height: themes.height / 20,
                    width: '100%',
                    padding: 3,
                    justifyContent: 'center',
                  }}>
                  <ScaleTextLibrary
                    styl={{
                      alignItems: 'center',
                      color: '#383E44',
                    }}
                    font={H5 + 1}
                    text="Quick Menu"></ScaleTextLibrary>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <ScrollView style={{width: '100%'}}>
                    {items1.map(item => {
                      return (
                        <Button2
                          Textstyle={{color: 'black'}}
                          style_button={{
                            borderLeftColor: item.code,
                            width: '100%',
                            height: themes.width*3/3.8*0.5/3.9*0.4,
                          }}
                          lable={item.lable}></Button2>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              {/**QuickMenu */}

              {/**FullMenu */}
              <View
                style={{
                  backgroundColor: 'white',
                  marginHorizontal: 10,
                  flex: 0.5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: themes.height / 20,
                      padding: 3,
                      justifyContent: 'center',
                    }}>
                    <ScaleTextLibrary
                      styl={{
                        alignItems: 'center',
                        color: '#383E44',
                      }}
                      font={H5 + 1}
                      text="Full Menu"></ScaleTextLibrary>
                  </View>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <IonIcon
                      name="ios-menu"
                      size={18}
                      color="black"
                      style={{}}></IonIcon>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 5,
                  }}>
                  <ScrollView style={{width: '100%'}}>
                    {items1.map(item => {
                      return (
                        <Button2
                          Textstyle={{color: 'black'}}
                          style_button={{
                            borderLeftColor: item.code,
                            width: '100%',
                            height: themes.width*3/3.8*0.5/3.9*0.4,
                          }}
                          lable={'Machine'}></Button2>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>

              {/**FullMenu */}

              {/**GridView */}
              <View style={{flex: 1 , paddingRight : 10}}>
                <View style={{height: themes.height / 20, marginTop: 7}}></View>
                <GridList
                  showSeparator
                  data={items}
                  numColumns={2}
                  renderItem={this.renderItem}
                  separatorBorderWidth={5}
                  showSeparator={true}></GridList>
              </View>
            </View>

            {/**GridView */}
          </View>

          <View
            style={{
              flex: 0.65,
              backgroundColor: 'white',
              borderTopWidth: 1,
              borderTopColor: '#C1C1C1',
            }}>
            <ScrollView horizontal={true} style={{flex: 1, padding: 5}}>
              {data.map(item => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      height: '95%',
                      //   width: (themes.height * 1.5) /10  ,
                      borderWidth: 1,
                      borderColor: '#C1C1C1',
                      marginHorizontal: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 3,
                      marginVertical: 1,
                      paddingVertical: 1.5,
                      marginRight : 10
                    }}>
                    <IonIcon
                      name={item.icon}
                      color={'black'}
                      size={12}></IonIcon>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <ScaleTextLibrary
                        styl={{
                          color: 'black',
                          textAlign: 'center',
                          paddingHorizontal: 3,
                        }}
                        font={H5 - 1}
                        text={item.lable}></ScaleTextLibrary>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default InitScreen;
