/**
 * @author: thai.nguyen 
 * @date: 2018-06-26 13:44:13 
 *
 * Contain common styles
 */

import {
  StyleSheet,
} from 'react-native';

const AppStyles = StyleSheet.create({
  shadowView : {
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: { width: 1, height: 3, },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AppStyles;
export const commonNavigatorStyle = {
  
  navBarLeftButtonColor: '#fff',
  
};