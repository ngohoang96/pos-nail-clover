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
export default class PaymentReward extends Component {
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
        }}>
        <View style={[styles_home.container2, {paddingRight: 10, flex: 1}]}>
          <ScaleTextLibrary
            styl={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}
            font={themes.H5}
            text="Reward"></ScaleTextLibrary>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '70%',
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              padding: 1,

              backgroundColor: '#EEEEEE',
              flex: 0.8,
              marginLeft: 3,
            }}>
            <ScaleTextLibrary
              styl={{color: 'black'}}
              font={themes.H5}
              text="($0.00)"></ScaleTextLibrary>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              padding: 1,

              marginLeft: 3,
              backgroundColor: 'white',
              flex: 0.8,
              width: '75%',
            }}>
            <ScaleTextLibrary
              styl={{}}
              font={themes.H5}
              text="Redoom"></ScaleTextLibrary>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.3}}>
          <ScaleTextLibrary
            styl={{color: '#383E44', textAlign: 'right'}}
            font={themes.H5}
            text="($0.00)"></ScaleTextLibrary>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
