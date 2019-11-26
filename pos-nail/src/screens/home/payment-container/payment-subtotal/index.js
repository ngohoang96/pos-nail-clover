import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import themes from '../../../../config/themes';
import ScaleTextLibrary from '../../../../utils/ScaleTextLibrary';
import {normalize} from '../../../../utils/scales';
import {styles_home} from '../../styles-home';
export default class PaymentSubtotal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <ScaleTextLibrary
          styl={{ alignItems: 'center', color: '#383E44', flex: 1}}
          font={themes.H5}
          text="Subtotal"></ScaleTextLibrary>
        <ScaleTextLibrary
          styl={{
            color: '#383E44',
            flex: 0.3,
            textAlign: 'right',
          }}
          font={themes.H5}
          text="($0.00)"></ScaleTextLibrary>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
