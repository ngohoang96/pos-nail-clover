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
import ScaleTextLibrary from '../../../../Utils/ScaleTextLibrary';
import {normalize} from '../../../../Utils/scales';
import {styles_home} from '../../styles-home';
export default class PaymentCoupon extends Component {
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
      <View style={{flex: 1}}>
        <ScaleTextLibrary
          styl={{
            alignItems: 'center',
            color: '#383E44',
            fontWeight: 'bold',
          }}
          font={themes.H5}
          text="Total"></ScaleTextLibrary>
      </View>
      <View style={{flex: 0.3}}>
        <ScaleTextLibrary
          styl={{
            color: 'black',
            textAlign: 'right',
            fontWeight: 'bold',
          }}
          font={themes.H5}
          text="$64.0"></ScaleTextLibrary>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({});
