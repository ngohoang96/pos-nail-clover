import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import themes from '../../config/themes';
import ScaleTextLibrary from '../../Utils/ScaleTextLibrary';
import {normalize} from '../../Utils/scales';

import {TextScale} from '../../Utils/TextScale';
const H5 = 7;
const H6 = 6;
export default class ItemService extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <ScaleTextLibrary font={H5 - 1} text="Organic"></ScaleTextLibrary>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ScaleTextLibrary
              font={H5 - 1}
              text="Rejuventation"></ScaleTextLibrary>
          </View>
          <TouchableOpacity style={{flex: 1, justifyContent: 'flex-start'}}>
            <Image
              resizeMethod="scale"
              source={require('../../assets/images/trash.png')}
              style={{
                width: normalize(H5),
                height: normalize(H5),
                tintColor: 'gray',
              }}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnName}>
          <TouchableOpacity style={styles.btnName}>
            <ScaleTextLibrary
              styl={styles.txtName}
              font={H5 - 2.5}
              text={this.props.name}></ScaleTextLibrary>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.8}}>
          <ScaleTextLibrary
            styl={{marginLeft: 1}}
            font={H5 - 1}
            text="Guest  x1"></ScaleTextLibrary>
        </View>
        <View style={styles.containerTp}>
          <TextInput style={styles.styInput}></TextInput>
          <TextInput style={styles.styInput}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnName: {
    backgroundColor: '#0073B7',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    paddingVertical: 3,
    marginLeft: 1,
  },
  containerTp: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  containerBtnName: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  styInput: {
    width: '48%',
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    paddingVertical: -10,
    height: '100%',
    fontSize: normalize(H6),
  },
});
