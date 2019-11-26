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
export default class PaymentGiftCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 1,
          flex: 1,
          marginTop: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            paddingRight: 10,
          }}>
          <ScaleTextLibrary
            styl={{
              alignItems: 'center',
              color: '#383E44',
              flex: 1,
            }}
            font={themes.H5}
            text="Gift cart"></ScaleTextLibrary>

          <TextInput
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              paddingVertical: -5,
              flex: 1,
              fontSize: normalize(themes.H6),
              marginLeft: 3,
            }}></TextInput>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              paddingVertical: -5,
              flex: 0.5,
              fontSize: normalize(themes.H6),
              marginLeft: 3,
            }}></TextInput>
        </View>
        <View style={{flex: 0.3}}>
          <ScaleTextLibrary
            styl={{
              alignItems: 'center',
              color: '#383E44',
              textAlign: 'right',
            }}
            font={themes.H5}
            text="($0.00)"></ScaleTextLibrary>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
