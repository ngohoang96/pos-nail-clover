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
import {Button} from '../../../../Components/InitScreen/Button';
export default class PaymentListButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{marginTop: 1, flex: 4}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 1,
            flex: 1,
          }}>
          <Button
            Textstyle={{color: 'black'}}
            lable={'$64.00'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'$65.00'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: 'white'}}
            lable={'$70.00'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: '#EEEEEE'}}
            lable={'Custom Price'}
            bg={'#EEEEEE'}></Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 1,
            flex: 1,
          }}>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Cancel'}
            bg={'white'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Gift Card'}
            bg={'#6697EA'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Charge'}
            bg={'#FD6CB4'}></Button>
          <Button
            Textstyle={{color: 'black'}}
            lable={'Cash'}
            bg={'#FDA428'}></Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
            borderTopWidth: 1,
            borderTopColor: 'gray',
            paddingTop: 1,
            marginTop: 1,
          }}>
          <TouchableOpacity
            style={{
              width: '30%',
              height: '90%',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ScaleTextLibrary
              styl={{color: '#383E44'}}
              font={themes.H5 - 1}
              text="Cancel"></ScaleTextLibrary>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '30%',
              height: '90%',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ScaleTextLibrary
              styl={{color: '#383E44'}}
              font={themes.H5 - 1}
              text="Service"></ScaleTextLibrary>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
