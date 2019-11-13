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
  Dimensions, Platform, PixelRatio,
} from 'react-native';
import themes from './config/themes';
import {data, items,items1} from './Components/InitScreen/mockData';
import {Button} from './Components/InitScreen';
import Button2 from './Components/InitScreen/Button2';
import ItemTech from './Components/InitScreen/itemTech';
import ItemCustomer from './Components/InitScreen/itemCustomer';
import {styles} from './Components/InitScreen/styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GridList from 'react-native-grid-list';
import {normalize} from './Utils/scales'
import {TextScale} from './Utils/TextScale'

const H1 = 14;
const H2 = 14;
const H3 = 12;
const H4 = 10;
const H5 = 8;
class InitScreen extends Component {
  renderItem = ({item, index}) => (
    <TouchableOpacity style={styles.renderItemGridList}>
      <TextScale lable = {item.code} font = {4}></TextScale>
      <TextScale lable = {index} font = {4}></TextScale>
    </TouchableOpacity>
  );
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{flex: 1, borderRightWidth: 1, borderRightColor: '#878787'}}>
          <View style={styles.bgWhite_flex1}>
            <View style={[styles.bgWhite_flex1, {padding: 3}]}>
              <TextScale font = {6} lable = "Payment Cart" Textstyle={[styles.textPaymentCart]}>
              </TextScale>
            </View>
            <View style={styles.viewService}>
              <TextScale font = {5} lable = "Service" Textstyle={[styles.textService]}></TextScale>
            </View>
          </View>
          <View style={{flex: 6, backgroundColor: 'white', padding: 5}}>
            {/* Payment */}
            <ScrollView style={{flex: 1}}>
              {items.map(item => {
                return (
                  <View
                    style={{
                      height: 40,
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
                        alignItems: 'center',
                      }}>
                      <TextScale font = {4} lable = "Cooling Gel"></TextScale>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#005E96',
                          borderRadius: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 3,
                        }}>
                        <TextScale
                            font = {4}
                            lable = 'Hai Dao'
                            Textstyle={{
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                        </TextScale>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                      <TextScale font = {4} lable = "Guest  x1"></TextScale>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          width: '50%',
                          height: '50%',
                          borderWidth: 1,
                          borderColor: '#BEBEBE',
                        }}>
                        <TextInput style={{flex: 1}}></TextInput>
                      </View>
                      <View
                        style={{
                          width: '50%',
                          height: '50%',
                          borderWidth: 1,
                          borderColor: '#BEBEBE',
                          marginHorizontal: 1,
                        }}>
                        <TextInput style={{flex: 1}}></TextInput>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            {/* Payment */}
            <View style={{flex: 4}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between', flex : 1}}>
                <TextScale font = {4} lable = "Subtotal" Textstyle={[styles.text1]}></TextScale>
                <TextScale font = {4} lable = "($0.00)" Textstyle={[styles.text1]}></TextScale>
              </View>
              <View style={[styles.containerView1 , { flex : 1}]}>
                <View style={[styles.container2, {paddingRight: 10}]}>
                  <TextScale lable = "Coupon" font = {4} Textstyle={[styles.text1, { flex: 1}]}>
                  </TextScale>
                  <TextInput
                    style={[styles.textIpBasic, {flex: 1}]}></TextInput>
                </View>
                <TextScale lable = "($0.00)" font = {4} Textstyle={[styles.text2]}></TextScale>
              </View>
              <View style={[styles.containerView1 , {flex : 1}]}>
                <View style={[styles.container2, {paddingRight: 10}]}>
                  <TextScale lable = "Gift cart" font = {4} Textstyle={[styles.text1, { flex: 1}]}>
                  </TextScale>
                  <TextInput
                    style={[styles.textIpBasic, {flex: 1}]}></TextInput>
                </View>
                <TextScale lable = "($0.00)" font = {4} Textstyle={[styles.text2]}></TextScale>
              </View>
              {/* <TextInput style = {{width : themes.width*1/12  , borderWidth : .5 , borderColor : '#BEBEBE' , paddingVertical : -3, marginTop : 5}}></TextInput> */}
              <View style={[styles.containerView1 , {flex : 1}]}>
                <View style={[styles.container2, {paddingRight: 10}]}>
                <TextScale lable = "Tips" font = {4} Textstyle={[styles.text1, { flex: 1}]}>
                  </TextScale>
                  <TextInput
                    style={[styles.textIpBasic, {flex: 1}]}></TextInput>
                   <TextScale lable = "Ticket" font = {4} Textstyle={[styles.text1, { flex: 1.2}]}>
                  </TextScale>
                </View>
                <TextScale lable = "($0.00)" font = {4} Textstyle={[styles.text2]}></TextScale>
              </View>
              <TextInput
                defaultValue="Combine Payment"
                style={{
                  width: 130,
                  fontSize: normalize(4),
                  borderWidth: 0.5,
                  color: '#868A8F',
                  borderColor: '#BEBEBE',
                  paddingVertical: -3,
                  paddingHorizontal: 3,
                  marginTop: 5,
                  flex : 1
                }}></TextInput>
              <View style={[styles.containerView1 , {flex : 1}]}>
                <View style={[styles.container2, {paddingRight: 10}]}>
                  <TextScale lable = "Discount(%)" font = {4} Textstyle={[styles.text1, { flex: 1}]}>
                  </TextScale>
                  <TextInput
                    style={[styles.textIpBasic, {flex: 0.6}]}></TextInput>
                     <TextScale lable = "(Fix amount)" font = {4} Textstyle={[styles.text1, { flex: 1}]}>
                  </TextScale>
                </View>
                <TextScale lable = "($0.00)" font = {4} Textstyle={[styles.text3, { flex: 0.2}]}>
                </TextScale>
              </View>
              <TextInput
                style={{
                  width: (themes.width * 1) / 12,
                  borderWidth: 0.5,
                  borderColor: '#BEBEBE',
                  paddingVertical: -3,
                  marginTop: 5,
                  flex : 1
                }}></TextInput>
              <View style={[styles.containerView1 , {flex : 1}]}>
                <View style={[styles.container2, {paddingRight: 10}]}>
                <TextScale lable = "Reward" font = {4} Textstyle={[styles.text1, { flex: 1}]}>
                  </TextScale>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.btn1,
                      {
                        backgroundColor: '#BEBEBE',
                        paddingVertical: -3,
                        flex: 1,
                      },
                    ]}>
                   <TextScale lable = "$0.00" font = {4}></TextScale>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.btn1,
                      {
                        marginLeft: 3,
                        backgroundColor: 'white',
                        paddingVertical: -3,
                        flex: 1,
                      },
                    ]}>
                   <TextScale lable = "Redoom" font = {4}>
                  </TextScale>
                  </TouchableOpacity>
                </View>
                <TextScale lable = "($0.00)" font = {4} Textstyle={[styles.text1, { flex: 0.17}]}>
                  </TextScale>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'  , flex : 1}}>
                <TextScale
                    font = {10}
                    lable = "Total"
                  Textstyle={{
                    alignItems: 'center',
                    color: '#383E44',
                    fontWeight: 'bold',
                  }}>
                </TextScale>
                <TextScale font = {10} lable = "($0.00)" Textstyle={[styles.text1,]}></TextScale>
              </View>
              <View style={{alignItems: 'flex-start' , flex : 1}}>
                <TextScale font = {10} lable = "Fast Pay With Cash" Textstyle={{ color: '#383E44'}}>
                </TextScale>
              </View>
              <View style={{marginTop: 3 , flex : 3}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 3,
                  }}>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#594F41'}></Button>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#503B31'}></Button>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#F84C5E'}></Button>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#9FA982'}></Button>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 3,
                  }}>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#11D3DC'}></Button>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#D1B35A'}></Button>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#6E826C'}></Button>
                  <Button
                    Textstyle={{color: 'white'}}
                    lable={'$0.00'}
                    bg={'#074B29'}></Button>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'  ,
                 flex : 1.5 , borderTopWidth : 1 , borderTopColor : 'gray' , paddingTop : 3}}>
                 <TouchableOpacity style = {{width : '25%' , height : '80%' ,
                  borderWidth : 1 , borderColor : 'gray' , borderRadius : 5 , 
                  alignItems : 'center' , justifyContent : 'center'}}>
                     <TextScale font = {4} lable = "Cancel"></TextScale>
                 </TouchableOpacity>
                 <TouchableOpacity style = {{width : '25%' , height : '80%' ,
                  borderWidth : 1 , borderColor : 'gray' , borderRadius : 5 , 
                  alignItems : 'center' , justifyContent : 'center'}}>
                  <TextScale font = {4} lable = "Service"></TextScale>
                 </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 3, backgroundColor: 'white'}}>
          <View
            style={{flex: 6, backgroundColor: 'white', flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {/* Technician */}
              <View style={{flex: 0.9, backgroundColor: 'white'}}>
                <View
                  style={{
                    height: 35,
                    width: '100%',
                    padding: 3,
                    justifyContent: 'center',
                  }}>
                  <TextScale
                  font = {5}
                  lable = "Technician Turn"
                    Textstyle={{
                      alignItems: 'center',
                      color: '#383E44',
                    }}>
                  </TextScale>
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
                    height: 35,
                    width: '100%',
                    padding: 3,
                    justifyContent: 'center',
                  }}>
                  <TextScale
                    font = {5}
                    lable = "Customer"
                    Textstyle={{
                      alignItems: 'center',
                      color: '#383E44',
                    }}>
                  </TextScale>
                </View>
                <ScrollView style={{flex: 1}}>
                  {[1,2,3].map(item => {
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
                    height: 35,
                    width: '100%',
                    padding: 3,
                    justifyContent: 'center',
                  }}>
                   <TextScale
                    font = {5}
                    lable = "Quick Menu"
                    Textstyle={{
                      alignItems: 'center',
                      color: '#383E44',
                    }}>
                  </TextScale>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <ScrollView style={{width: '100%'}}>
                    {items1.map(item => {
                      return (
                        <Button2
                          Textstyle={{color: 'black'}}
                          style_button={{
                            borderLeftColor: item.code,
                            width: '100%',
                            height: (themes.height * 1) / 16,
                          }}
                          lable={'Machine'}></Button2>
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
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{height: 35, padding: 3, justifyContent: 'center'}}>
                     <TextScale
                    font = {5}
                    lable = "Full Menu"
                    Textstyle={{
                      alignItems: 'center',
                      color: '#383E44',
                    }}>
                  </TextScale>
                  </View>
                  <View style={{padding: 3, justifyContent: 'center'}}>
                    <IonIcon
                      name="ios-menu"
                      size={22}
                      color="black"
                      style={{marginTop: 5}}></IonIcon>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <ScrollView style={{width: '100%'}}>
                    {items1.map(item => {
                      return (
                        <Button2
                          Textstyle={{color: 'black'}}
                          style_button={{
                            borderLeftColor: item.code,
                            width: '100%',
                            height: (themes.height * 1) / 16,
                          }}
                          lable={'Machine'}></Button2>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>

              {/**FullMenu */}

              {/**GridView */}
              <View style={{flex: 1}}>
                <View style={{height: 40}}></View>
                <GridList
                  showSeparator
                  data={items}
                  numColumns={2}
                  renderItem={this.renderItem}
                />
              </View>
            </View>

            {/**GridView */}
          </View>

          <View
            style={{
              flex: 0.6,
              backgroundColor: 'white',
              borderTopWidth: 1,
              borderTopColor: '#C1C1C1',
            }}>
            <ScrollView horizontal={true} style={{flex: 1, paddingLeft: 5}}>
              {data.map(item => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      height: '93%',
                    //   width: (themes.height * 1.5) /10  ,
                      borderWidth: 1,
                      borderColor: '#C1C1C1',
                      marginHorizontal: 1,
                      marginTop : 2,
                      alignItems: 'center',
                      justifyContent: 'center', padding : 3,
                      paddingHorizontal : 3
                    }}>
                    <IonIcon
                      name={item.icon}
                      color={'black'}
                      size={16}></IonIcon>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <TextScale
                        font = {4}
                        lable = {item.lable}
                        Textstyle={{
                          color: 'black',
                          textAlign: 'center',
                          paddingHorizontal : 3
                        }}>
                      </TextScale>
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
