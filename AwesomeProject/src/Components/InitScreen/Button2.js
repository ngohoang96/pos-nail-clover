import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themes from '../../config/themes';
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    width: (((themes.width * 3) / 4.2) * 0.8) / 5.3,
    borderRadius: 3,
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 10,
    borderTopColor: '#383E44',
    borderTopWidth: 1,
    borderRightColor: '#383E44',
    borderRightWidth: 1,
    borderBottomColor: '#383E44',
    borderBottomWidth: 1,
  },
});

export default class Button2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {borderLeftWidth: 4, ... this.props.style_button},
        ]}>
        <Text style={[styles.text, this.props.Textstyle]}>
          {this.props.lable}
        </Text>
      </TouchableOpacity>
    );
  }
}

// export function Button2({Textstyle, lable,style_button, bg, ...props}) {
//   return (
//     <TouchableOpacity
//       {...props}
//       style={[styles.button, {borderLeftWidth: 4, borderLeftColor: bg} ]}>
//       <Text style={[styles.text, Textstyle]}>{lable}</Text>
//     </TouchableOpacity>
//   );
// }

// Button2.propTypes = {
//   Textstyle: Text.propTypes.style,
//   lable: PropTypes.string,
//   bg: PropTypes.string
// };

// Button2.defaultProps = {
//   Textstyle: {},
//   lable: '',
//   bg: 'white',
//   style_button : {backgroundColor : 'red'}
// };
