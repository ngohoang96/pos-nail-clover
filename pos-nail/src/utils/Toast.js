/**
 * @author: thai.nguyen 
 * @date: 2018-07-01 14:22:28 
 *
 *  
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const ToastPosition = {
  TOP: {top: 50,},
  CENTER: {top: '45%',},
  BOTTOM: {bottom: 50,},
};

const LENGTH = {
  LONG: 6000,
  SHORT: 3000,
};
class Toast extends React.Component{
    static _instant = null;
    constructor(props){
      super(props);
      Toast._instant = this;
      this.state = {
        content: '',
        position: ToastPosition.CENTER,
        length: LENGTH.SHORT,
        visible: false,
      };
    }

    static POSITION = ToastPosition;
    static LENGTH = LENGTH;

    static show(content, position, length){
      Toast._instant.setState({
        content,
        position,
        length,
        visible: true,
      });
      clearTimeout(Toast._instant.time);
      Toast._instant.time = setTimeout(() => {
        Toast._instant.setState({
          content: '',
          position: ToastPosition.CENTER,
          length: LENGTH.SHORT,
          visible: false,
        });
      }, length);
    }
    static hide(){
      clearTimeout(Toast._instant.time);
      Toast._instant.setState({
        content: '',
        position: ToastPosition.CENTER,
        length: LENGTH.SHORT,
        visible: false,
      });
    }
    render(){
      let {
        position,
        content,
        visible,
      } = this.state;
      if(!visible){
        return <View/>;
      }
      return <View style={[styles.container, position,]}>
        <TouchableOpacity style={styles.toastView} activeOpacity={1} onPress={()=>Toast.hide()}>
          <Text style={styles.toastText}>{content}</Text>
        </TouchableOpacity>
      </View>;
    }
}
export default Toast;

const styles = StyleSheet.create({
  container: {
    left: 0, right: 0,
    alignItems: 'center',
    position: 'absolute',
  },
  toastView: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  toastText: {textAlign: 'center', color: '#fff', backgroundColor: 'transparent',},
});