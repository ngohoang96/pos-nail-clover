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
  Animated,
  Easing,
} from 'react-native';
import themes from './config/themes';
import {
  data,
  items,
  items1,
  items2,
  dataService,
  dataTechnician,
} from './Components/InitScreen/mockData';
import {Button} from './Components/InitScreen';
import Button2 from './Components/InitScreen/Button2';
import ItemCustomer from './Components/InitScreen/itemCustomer';
import ItemService from './Components/InitScreen/ItemService';
import {styles} from './Components/InitScreen/styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GridList from 'react-native-grid-list';
import {normalize} from './Utils/scales';

import ScaleTextLibrary from './Utils/ScaleTextLibrary';
import {scaleText} from 'react-native-text';

import TechnicianRepander from './Components/InitScreen/TechnicianRepander'


const H5 = 7;
const H6 = 5;
class InitScreen extends Component {
  constructor(props) {
    super();

    this.state = {
      data: items,
      scrollEnabled: true,
      dataService: dataService,
    };
  }
  ///
  renderItem = ({item, index}) => (
    <TouchableOpacity style={styles.renderItemGridList}>
      <ScaleTextLibrary
        styl={{textAlign: 'center'}}
        font={H5}
        text={item.code}></ScaleTextLibrary>
      <ScaleTextLibrary font={H5} text={index}></ScaleTextLibrary>
    </TouchableOpacity>
  );
  _renderSubtotal = () => {
    return (
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
    );
  };
  _renderCoupon = () => {
    return (
      <View style={[styles.containerView1, {flex: 1}]}>
        <View style={[styles.container2, {paddingRight: 10, flex: 1}]}>
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
    );
  };
  _renderGiftCart = () => {
    return (
      <View style={[styles.containerView1, {flex: 1, marginTop: 2}]}>
        <View style={[styles.container2, {paddingRight: 10, flex: 1}]}>
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
    );
  };
  _renderTips = () => {
    return (
      <View style={[styles.containerView1, {flex: 1, marginTop: 2}]}>
        <View style={[styles.container2, {paddingRight: 10, flex: 1}]}>
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
    );
  };
  _renderDiscount = () => {
    return (
      <View style={[styles.containerView1, {flex: 1, marginTop: 2}]}>
        <View style={[styles.container2, {flex: 1, paddingRight: 10}]}>
          <ScaleTextLibrary
            styl={[styles.text1, {flex: 1}]}
            font={H5}
            text="Discount(%)"></ScaleTextLibrary>

          <TextInput
            style={[
              styles.textIpBasic,
              {flex: 0.8, fontSize: normalize(H6), marginBottom: 1},
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
    );
  };
  _renderReward = () => {
    return (
      <View style={[styles.containerView1, {flex: 1}]}>
        <View style={[styles.container2, {paddingRight: 10, flex: 1}]}>
          <ScaleTextLibrary
            styl={[styles.text1, {flex: 1}]}
            font={H5}
            text="Reward"></ScaleTextLibrary>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.btn1,
              {
                backgroundColor: '#EEEEEE',
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
    );
  };
  _renderTotal = () => {
    return (
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
    );
  };
  _renderListButton = () => {
    return (
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
            Textstyle={{color: 'white'}}
            lable={'$70.00'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: '#EEEEEE'}}
            lable={'Custom Price'}
            bg={'#EEEEEE'}></Button>
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
            bg={'#6697EA'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Charge'}
            bg={'#FD6CB4'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Cash'}
            bg={'#FDA428'}></Button>
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
          <TouchableOpacity style={styles.buttonCancel}>
            <ScaleTextLibrary
              styl={{color: '#383E44'}}
              font={H5 - 1}
              text="Cancel"></ScaleTextLibrary>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel}>
            <ScaleTextLibrary
              styl={{color: '#383E44'}}
              font={H5 - 1}
              text="Service"></ScaleTextLibrary>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  _renderPayment = () => {
    return (
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
    );
  };
  _renderTechnicianTurn = () => {
    return (
      <View style={{flex: 0.9}}>
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

        <ScrollView style={{flex: 1, width: themes.width, zIndex: 10}}>
          {dataTechnician.map(item => {
            return <TechnicianRepander name={item.name}></TechnicianRepander>;
          })}
        </ScrollView> 
       
      </View>
    );
  };
  _renderCustomer = () => {
    return (
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
    );
  };

  _renderQuickMenu = () => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          flex: 0.5,
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
            text="Quick Menu"></ScaleTextLibrary>
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
                    height: ((((themes.width * 3) / 3.8) * 0.5) / 3.9) * 0.3,
                    backgroundColor: 'white',
                  }}
                  lable={item.lable}></Button2>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  };
  _renderFullMenu = () => {
    return (
      <View
        style={{
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
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
            {items2.map(item => {
              return (
                <Button2
                  Textstyle={{color: 'black'}}
                  style_button={{
                    borderLeftColor: item.code,
                    width: '100%',
                    height: ((((themes.width * 3) / 3.8) * 0.5) / 3.9) * 0.3,
                    backgroundColor: item.backgroundColor,
                  }}
                  lable={'Machine'}></Button2>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  };
  _renderScrollBottom = () => {
    return (
      <View
        style={{
          flex: 0.65,
          borderTopWidth: 1,
          borderTopColor: '#C1C1C1',
          backgroundColor: 'white',
          zIndex : -1000
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
                  marginRight: 10,
                  backgroundColor: 'white',
                }}>
                <IonIcon name={item.icon} color={'#444444'} size={12}></IonIcon>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
    );
  };
  _renderGrid = () => {
    return (
      <View style={{flex: 1, paddingRight: 10}}>
        <View style={{height: themes.height / 20, marginTop: 7}}></View>
        <GridList
          showSeparator
          data={items}
          numColumns={2}
          renderItem={this.renderItem}
          separatorBorderWidth={5}
          showSeparator={true}></GridList>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{flex: 0.8, borderRightWidth: 1, borderRightColor: '#878787', zIndex : -11}}>
          {/* <KeyboardAvoidingView style = {{flex : 1}}  behavior= 'height'> */}
          {this._renderPayment()}
          <View
            style={{
              flex: 6,
              backgroundColor: 'white',
              paddingHorizontal: 3,
              paddingVertical: 1,
              zIndex: -1,
            }}>
            <View style={{flex: 4}}>
              {/* Payment */}
              <ScrollView style={{flex: 1}}>
                {this.state.dataService.map(item => {
                  return <ItemService name={item.name}></ItemService>;
                })}
              </ScrollView>
              <View style={{flex: 1}}>
                {this._renderSubtotal()}
                {this._renderCoupon()}
                {this._renderGiftCart()}
                {this._renderTips()}
                {this._renderDiscount()}
                {this._renderReward()}
                {this._renderTotal()}
                <View style={{alignItems: 'flex-start', flex: 1}}>
                  <ScaleTextLibrary
                    styl={{color: '#383E44'}}
                    font={H5}
                    text="Fast With Cash"></ScaleTextLibrary>
                </View>
                {this._renderListButton()}
              </View>
            </View>
          </View> 
        </View>
        <View style={{flex: 3, backgroundColor: 'white'}}>
          <View
            style={{flex: 6, backgroundColor: 'white', flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {/* Technician */}
              {this._renderTechnicianTurn()}
              {/**Customer */}
              {this._renderCustomer()}
              {/**QuickMenu */}
              {this._renderQuickMenu()}
              {/**FullMenu */}
              {this._renderFullMenu()}
              {/**GridView */}
              {this._renderGrid()}
            </View>
          </View>

          {this._renderScrollBottom()}
        </View>
      </SafeAreaView>
    );
  }
}
export default InitScreen;
