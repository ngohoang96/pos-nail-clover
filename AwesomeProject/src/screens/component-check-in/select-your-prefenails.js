import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import themes from '../../config/themes';
import {Colors} from '../../themes';
import {normalize} from '../../utils/FontSize';
import {TextCmp} from '../../common-components/index';

export default (props = {}) => {
  return (
      <View style={[styles.container , props.containerStyles]}>
            <View style = {styles.containerChil1}>
                <View style = {[styles.View , props.viewStyle]}></View>
                <View style = {[styles.View , {marginLeft : 2}, props.viewStyle]}></View>
                <View style = {[styles.View , {marginLeft : 2}, props.viewStyle]}></View>
                <View style = {[styles.View , {marginLeft : 2}, props.viewStyle]}></View>
            </View>
            <View style = {styles.containerChil2}>
                <View style = {[styles.View , props.viewStyle]}></View>
                <View style = {[styles.View , {marginLeft : 2}, props.viewStyle]}></View>
                <View style = {[styles.View , {marginLeft : 2}, props.viewStyle]}></View>
                <View style = {[styles.View , {marginLeft : 2}, props.viewStyle]}></View>
            </View>
        </View>
  );
};
const styles = StyleSheet.create({
 container : {flex: 5, backgroundColor: 'white'} , 
 containerChil1 : {flex: 1 , flexDirection : 'row',justifyContent : "center" , alignItems : 'center'} , 
 containerChil2 : {flex: 1 ,marginTop :2, flexDirection : 'row',justifyContent : "center" , alignItems : 'center'} , 
 View : {width : '20%' , height : '100%' , borderWidth : 0.5 , borderColor :  Colors.darkBlue}
});
