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
export default class PaymentTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 0.65, backgroundColor: 'white', overflow: 'hidden'}}>
        <View
          style={{
            flex: 0.65,
            backgroundColor: 'white',
            overflow: 'hidden',
            padding: 3,
            justifyContent: 'center',
          }}>
          <ScaleTextLibrary
            styl={{
              alignItems: 'center',
              color: '#383E44',
              fontWeight: 'bold',
            }}
            font={themes.H5+1}
            text="Payment Cart"></ScaleTextLibrary>
        </View>
        <View
          style={{
            flex: 0.6,
            backgroundColor: '#F5F5F5',
            borderBottomWidth: 1,
            borderBottomColor: '#878787',
            padding: 3,
            justifyContent: 'center',
          }}>
          <ScaleTextLibrary
            styl={{alignItems: 'center', color: '#383E44'}}
            font={themes.H5 + 1}
            text="Service"></ScaleTextLibrary>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
