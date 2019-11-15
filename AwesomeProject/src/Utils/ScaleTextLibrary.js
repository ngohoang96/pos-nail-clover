import React , {Component} from 'react';
import { StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import ScalableText from 'react-native-text';

// const ScaleTextLibrary = ({ text , font }) => (
//   <ScalableText  style={[styles.text , {fontSize : font}]}>{text}</ScalableText>
// );
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

// ScaleTextLibrary.propTypes = {
//   text: PropTypes.string.isRequired , 
//   font : PropTypes.string
// };

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize:  10
  },
});

export default ScaleTextLibrary;