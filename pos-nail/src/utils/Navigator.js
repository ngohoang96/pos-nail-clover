/**
 * @author: thai.nguyen 
 * @date: 2018-06-26 22:18:08 
 *
 *  
 */
var AppNavigator = null;

export const getNavigator = ()=>{
  return AppNavigator;
};

export const setAppNavigator = (navigator)=>{
  AppNavigator = navigator;
};