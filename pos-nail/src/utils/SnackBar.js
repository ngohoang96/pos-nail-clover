/**
 * @author: thai.nguyen 
 * @date: 2018-12-13 00:27:44 
 *  
 * 
 */
import SnackBar from 'react-native-snackbar';

export const showError = (title) => {
  SnackBar.show({
    title: title,
    duration: SnackBar.LENGTH_LONG,
    backgroundColor: 'red',
  });
};

export const showSuccess = (title) => {
  SnackBar.show({
    title: title,
    duration: SnackBar.LENGTH_SHORT,
    backgroundColor: '#0EB464',
  });
};
