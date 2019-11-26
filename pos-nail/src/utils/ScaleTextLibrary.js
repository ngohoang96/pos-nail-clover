import React , {Component} from 'react';
import { StyleSheet } from 'react-native';

import ScalableText from 'react-native-text';

class ScaleTextLibrary extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ScalableText  style={[styles.text , {fontSize : this.props.font},{...this.props.styl}]}>{this.props.text}</ScalableText>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize:  10
  },
});

export default ScaleTextLibrary;