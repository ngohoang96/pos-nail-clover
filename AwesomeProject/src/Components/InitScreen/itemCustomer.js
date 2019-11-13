import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View , Image} from 'react-native';
import themes from '../../config/themes';
const styles = StyleSheet.create({});

export default class ItemCustomer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style = {{marginTop : 10 , width:themes.width*3/4.2*1/2.5 , height : 150 , flexDirection : 'row',backgroundColor : '#F5F5F5'}}>
        <View style = {{flex : 1 }}>
            <View style = {{ backgroundColor : '#F39C12' , justifyContent : 'center', paddingLeft : 3 ,
            borderWidth : 1 , borderColor : '#F7BD61',flex : 1}}>
                <Text style = {{fontSize : 14 , alignItems : 'center' , color : 'white' , fontWeight : 'bold'}}>#100672</Text>
            </View>
            <View style = {{alignItems : 'center' , justifyContent : 'center' , flex : 3 , backgroundColor : "#F5F5F5", borderWidth : 1 , borderColor : '#F7BD61'}}>
            <Image style = {{width : "50%" , height : "50%" , borderRadius : 10}}  
            source = {{uri : 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'}}></Image>
             <Text style = {{fontSize : 14 , alignItems : 'center' , color : '#939393'}}>Van Hoang</Text> 
            </View>
            
        </View>
        <View style = {{flex : 2.3}}>
            <View style = {{height : 35  , backgroundColor : '#F39C12' , justifyContent : 'center', paddingLeft : 3 , flex :1, }}>
                <Text style = {{fontSize : 14 , alignItems : 'center' , color : 'white' , fontWeight : 'bold'}}>Frequent Customer</Text>
            </View>
            <View style = {{alignItems : 'center' ,flexDirection : 'row', justifyContent : 'center',flex : 3,  borderBottomWidth : 1 , borderBottomColor : '#F7BD61'}}>
                <View style = {{flex : 3}}>
                    <View style = {{ borderTopWidth : 1 , borderTopColor : '#F7BD61',flex : 1, flexDirection : 'row'}}>
                        <Text style = {{fontSize : 12 , alignItems : 'center' , color : '#939393'}}>block in : </Text> 
                        <Text style = {{fontSize : 12 , alignItems : 'center' , color : 'black'}}>12h57 AM</Text> 
                    </View>
                    <View style = {{ borderTopWidth : 1 , borderTopColor : '#F7BD61',flex : 1}}>
                        <Text style = {{fontSize : 12 , alignItems : 'center' , color : 'black'}}>Walk in</Text>
                    </View>
                    <View style = {{ borderTopWidth : 1 , borderTopColor : '#F7BD61',flex : 1   }}>
                        <Text style = {{fontSize : 12 , alignItems : 'center' , color : 'black'}}>Calling gei</Text>
                    </View>
                    
                    <View style = {{ borderTopWidth : 1,flexDirection : 'row' , borderTopColor : '#F7BD61',flex : 1}}>
                        <Text style = {{fontSize : 12 , alignItems : 'center' , color : '#939393'}}>Nail tech : </Text> 
                        <Text style = {{fontSize : 12 , alignItems : 'center' , color : 'black'}}>Any nail</Text> 
                    </View> 
                </View>
                <View style = {{flex : 1.5}}>
                    <View style = {{ borderTopWidth : 1 ,borderRightWidth : 1 , borderRightColor :'#F7BD61' ,alignItems : 'flex-start' , justifyContent : 'center', borderTopColor : '#F7BD61',flex : 2 , borderLeftWidth : 1 , borderLeftColor : '#F7BD61'}}>
                        <Text style = {{fontSize : 12 , alignItems : 'center' , color : '#939393'}}>Waiting list</Text> 
                    </View>
                    <View style = {{ borderTopWidth : 1,borderRightWidth : 1 , borderRightColor :'#F7BD61'  ,alignItems : 'flex-start' , justifyContent : 'center', borderTopColor : '#F7BD61',flex : 1 , borderLeftWidth : 1 , borderLeftColor : '#F7BD61'}}>
                        <Text style = {{fontSize : 12 , alignItems : 'center', color : '#939393'}}>Quick View</Text> 
                    </View>
                    <View style = {{ borderTopWidth : 1,borderRightWidth : 1 , borderRightColor :'#F7BD61' ,alignItems : 'flex-start' , justifyContent : 'center', borderTopColor : '#F7BD61',flex : 1 , borderLeftWidth : 1 , borderLeftColor : '#F7BD61'}}>
                    <Text style = {{fontSize : 12 , alignItems : 'center' , color : 'black'}}>Remove</Text> 
                    </View>
                </View>
            </View>
        </View>
        
    </View>
    );
  }
}
