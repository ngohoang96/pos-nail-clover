import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { actions, selectors } from '../../../../stores';
import themes from '../../../../config/themes';
import { normalize } from '../../../../themes/FontSize';

import { testsIcons } from '../../../../assets';
import { TextCmp } from '../../../../themes';
class ItemService extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <View key={this.props.name} style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <TextCmp
              style={{
                fontSize: normalize(3.5),
              }}>
              Organic
            </TextCmp>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextCmp style={{ fontSize: normalize(3.5) }}>Rejuventation</TextCmp>
          </View>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Image
              resizeMethod="scale"
              source={testsIcons.trashIcon}
              style={{
                width: normalize(5),
                height: normalize(5),
                tintColor: 'gray',
              }}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBtnName}>
          <TouchableOpacity
            onPress={() => {
              console.log(this.props.id + ' bấm vô ' + this.props.name);
              this.props.deleteDataService(this.props.id);
            }}
            style={styles.btnName}>
            <TextCmp style={styles.txtName}>{this.props.name || 'Tên'}</TextCmp>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.8 }}>
          <TextCmp style={{ marginLeft: 1, fontSize: normalize(3.5) }}>
            Guest x1
          </TextCmp>
        </View>
        <View style={styles.containerTp}>
          <TextInput style={styles.styInput}></TextInput>
          <TextInput style={styles.styInput}></TextInput>
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  const deleteDataService = id => {
    dispatch(actions.home.dDataService(id));
  };
  return {
    deleteDataService,
  };
};

const mapStateToProps = state => ({
  // dataService: selectors.home.getDataService(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemService);

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
    fontSize: normalize(3),
  },
  styInput: {
    width: '48%',
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    paddingVertical: -10,
    height: '100%',
    fontSize: normalize(3),
  },
});
