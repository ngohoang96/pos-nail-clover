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
  TextInput , 
  TouchableOpacity , 
  Image
} from 'react-native';
import themes from './config/themes';
import {data,items} from './Components/InitScreen/mockData'
import {Button} from './Components/InitScreen'
import Button2 from './Components/InitScreen/Button2'
import ItemTech from './Components/InitScreen/itemTech'
import ItemCustomer from './Components/InitScreen/itemCustomer'
import {styles} from './Components/InitScreen/styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import GridList from 'react-native-grid-list';

  const WIDTH_BUTTON = themes.width*3/4.2*0.8/4.6
  const WIDTH_TITLE = themes.width*3/4.2*1/3.6

class InitScreen extends Component {
    renderItem = ({ item, index }) => (
        <View style = {styles.renderItemGridList}>
            <Text>{item.code}</Text>
            <Text>{index}</Text>
        </View>
      );
   render() {
    return (
      <SafeAreaView
        style={styles.container}>
        <View style={{flex: 1.2 , borderRightWidth : 1 , borderRightColor : '#878787'}}>
            
          <View style={styles.bgWhite_flex1}>
            <View style={[styles.bgWhite_flex1 , {padding : 3}]}>
                <Text style = {styles.textPaymentCart}>Payment Cart</Text>
            </View>
            <View style={styles.viewService}>
            <Text style = {styles.textService}>Service</Text>
            </View>
          </View>
          <View style={{flex: 6, backgroundColor: 'white' , padding : 5}}>
              <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <Text style = {styles.text1}>Subtotal</Text>
                <Text style = {styles.text1}>($0.00)</Text>
              </View>
              <View style = {styles.containerView1}>
                <View style = {[styles.container2 , {paddingRight : 10}]}>
                    <Text style = {styles.text1}>Coupon</Text>
                    <TextInput style = {styles.textIpCoupon}></TextInput>
                </View>
                <Text style = {styles.text2}>($0.00)</Text>
              </View>
              <View style = {styles.containerView1}>
                <View style =  {[styles.container2 , {paddingRight : 10}]}>
                    <Text style = {styles.text1}>Gift card</Text>
                    <TextInput style = {{width : 120  , borderWidth : .5 , borderColor : '#BEBEBE' ,  paddingVertical : -3}}></TextInput>
                </View>
                <Text style = {styles.text2}>($0.00)</Text>
              </View>
              <TextInput style = {{width : 60  , borderWidth : .5 , borderColor : '#BEBEBE' , paddingVertical : -3, marginTop : 5}}></TextInput>
              <View style = {styles.containerView1}>
                <View style =  {[styles.container2 , {paddingRight : 10}]}>
                    <Text style = {styles.text1}>Tips</Text>
                    <TextInput style = {styles.textIpBasic}></TextInput>
                    <Text style = {styles.text1}>Ticket</Text>
                </View>
                <Text style = {styles.text2}>($0.00)</Text>
              </View>
              <TextInput defaultValue = "Combine Payment" style = {{width : 130  , borderWidth : .5,color : '#868A8F' , borderColor : '#BEBEBE' , paddingVertical : -3 , paddingHorizontal : 3, marginTop : 5}}></TextInput>
              <View style = {styles.containerView1}>
                <View style =  {[styles.container2 , {paddingRight : 10}]}>
                    <Text style = {styles.text1}>Discount(%)</Text>
                    <TextInput style = {styles.textIpBasic}></TextInput>
                    <Text style = {styles.text1}>(Fix amount)</Text>
                </View>
                <Text style = {styles.text3}>($0.00)</Text>
              </View>
              <TextInput  style = {styles.textIp1}></TextInput>
              <View style = {styles.containerView1}>
                <View style =  {[styles.container2 , {paddingRight : 10}]}>
                    <Text style = {styles.text1}>Reward</Text>
                    <TouchableOpacity activeOpacity = {.8} style = {[styles.btn1, {backgroundColor : '#BEBEBE' ,  paddingVertical : -3}]}>
                        <Text>$0.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = {.8} style = {[styles.btn1, {backgroundColor : 'white' ,  paddingVertical : -3}]}>
                        <Text>Redeem</Text>
                    </TouchableOpacity>
                </View>
                <Text style = {styles.text3}>($0.00)</Text>
              </View>
              <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <Text style = {{fontSize : 14 , alignItems : 'center'  , color : '#383E44', fontWeight : 'bold'}}>Total</Text>
                <Text style = {styles.text1}>($0.00)</Text>
              </View>
              <View  style = {{fontSize : 18 , alignItems : 'flex-start'  , color : '#383E44'}}>
                  <Text>Fast Pay With Cash</Text>
              </View>
               <View style = {{marginTop : 10}}>
                <View style = {{flexDirection : 'row', justifyContent : 'space-around', marginTop : 10}}>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#594F41"}></Button>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#503B31"}></Button>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#F84C5E"}></Button>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#9FA982"}></Button>
                </View>
                <View style = {{flexDirection : 'row', justifyContent : 'space-around' , marginTop : 10}}>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#11D3DC"}></Button>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#D1B35A"}></Button>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#6E826C"}></Button>
                    <Button Textstyle = {{color : 'white'}} lable = {'$0.00'} bg = {"#074B29"}></Button>
                </View>
               </View>
          </View>
        </View>
        <View style={{flex: 3, backgroundColor: 'white'}}>
            <View style = {{flex : 6 , backgroundColor : 'white' , flexDirection : 'row'}}>
            <ScrollView horizontal = {true} style = {{flex : 1}}>
                <View style = {{flex : 1 , backgroundColor : 'white'}}>
                    <View style = {{ height : 35,width:WIDTH_TITLE, padding : 3, justifyContent : 'center'}}>
                        <Text style = {{fontSize : 20 , alignItems : 'center' , color : '#383E44'}}>Technician Turn</Text>
                    </View>
                    <ScrollView style = {{flex : 1}}>
                        {items.map(item =>{
                            return(
                                <View style = {{ marginHorizontal : 3}}>
                            <ItemTech></ItemTech> 
                        </View>
                            )
                        })}
                   </ScrollView>
                </View>
                <View style = {{flex : 1.3 , paddingLeft : 2 }}>
                    <View style = {{ height : 35,width:WIDTH_TITLE, marginTop : 3, justifyContent : 'center'}}>
                        <Text style = {{fontSize : 18 , alignItems : 'center' , color : '#383E44'}}>Customer</Text>
                    </View>
                    <ScrollView  style = {{flex : 1}}>
                    {items.map(item =>{
                            return(
                                <ItemCustomer></ItemCustomer>
                            )
                        })}
                        
                   </ScrollView>
                </View>

                <View style = {{width :WIDTH_BUTTON, backgroundColor : 'white' , marginLeft : 10}}>
                    <View style = {{ height : 35, padding : 3, justifyContent : 'center'}}>
                        <Text style = {{fontSize : 18 , alignItems : 'center' , color : '#383E44'}}>Quick menu</Text>
                    </View>
                    <View style = {{justifyContent : 'center' , alignItems : 'center'}}> 
                        <ScrollView>
                            {items.map((item)=>{
                                return(
                                    <Button2 Textstyle = {{color : 'black'}} style_button = {{borderLeftColor : item.code
                                        ,width : WIDTH_BUTTON}} lable = {'Machine'} ></Button2>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style = {{width : WIDTH_BUTTON, backgroundColor : 'white' , marginHorizontal : 10}}>
                    <View style = {{flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center'}}>
                        <View style = {{ height : 35, padding : 3, justifyContent : 'center' }}>
                            <Text style = {{fontSize : 18 , alignItems : 'center' , color : '#383E44'}}>Full menu</Text>
                        </View>
                        <IonIcon name = "ios-menu" size = {22} color = "black" style = {{marginTop : 5}}></IonIcon>
                    </View>
                    <View style = {{justifyContent : 'center' , alignItems : 'center'}}> 
                        <ScrollView>
                            {items.map((item)=>{
                                return(
                                    <Button2 Textstyle = {{color : 'black'}} style_button = {{borderLeftColor : item.code
                                    ,width : WIDTH_BUTTON}} lable = {'Machine'} ></Button2>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style = {{flex : 1}}>
                    <View style = {{ height : 35,width:WIDTH_TITLE, padding : 3, justifyContent : 'center', marginTop : 5}}>
                        
                    </View>
                    <GridList
                        showSeparator
                        data={items}
                        numColumns={2}
                        renderItem={this.renderItem}
                    />
                </View>
                </ScrollView>
            </View>
            
            <View style = {{flex : 1 , backgroundColor : 'white', borderTopWidth : 1 , borderTopColor : '#C1C1C1'}}>
                <ScrollView horizontal = {true} style = {{flex : 1, paddingLeft : 5}}>
                    {data.map((item) =>{return(
                    <View 
                    style = {{height : themes.height*1/7-10 , width : themes.height*1.5/7 
                        , borderWidth : 1 , borderColor : '#C1C1C1' , margin : 5 , alignItems : 'center' , justifyContent : 'center'
                     }}>
                        <IonIcon name = {item.icon} color = {'black'} size = {24} ></IonIcon>
                        <View style = {{alignItems : 'center' , justifyContent : "center"}}>
                            <Text style = {{fontSize : 12 , color : 'black', textAlign :'center'}}>{item.lable}</Text>
                        </View>
                    </View>)})}
                </ScrollView>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default InitScreen;
