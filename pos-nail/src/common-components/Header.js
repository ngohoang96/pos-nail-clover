/**
  @author: lai.do 
  @date: 2018-12-22 14:34:46 
   
  
 */
import React from 'react';
import {  StyleSheet,View, } from 'react-native';
import { Colors,TextCmp } from '../themes';

export default class Header extends React.Component{
  shouldComponentUpdate(){
    return false;
  }
  render(){
    const {Tittle,}= this.props;
    return(
      <View style = {styles.content}>
        <TextCmp style={styles.TittleText}>{Tittle}</TextCmp>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  content:{
    height:50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  TittleText:{
    color:Colors.blurWhite,
  },
});