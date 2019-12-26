import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {TextCmp, Metrics, Fonts} from '../../../../../../../themes';
import {normalize} from '../../../../../../../themes/FontSize';
import {iconsScroll} from '../../../../../../../assets';
import ComponentButton from '../../../BottomButton/ComponentButton';
import BottomButtonServices from './BottomButtonServices';
import HeaderServices from './HeaderServices';
import {Logg} from '../../../../../../../utils';

let dataSelected = [];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisiable: false,
      // Data_Services,
      listAdd: [],
      dataListSearch: [],
      dataSearchButton: this.props.dataSearchButton,
      index: 0,
      selectService: [],
    };
  }
  // shouldComponentUpdate(listAdd) {
  //   return listAdd !== this.state.listAdd;
  // }
  componentDidMount() {
    const {dataListSearch} = this.state;
    this.setState({
      dataListSearch: this.props.getlistDataServices.filter(function(item) {
        return item.id != -1;
      }),
    });
  }

  _renderBottomModal = () => {
    return (
      <View
        style={{
          width: Metrics.appWidth * 0.8,
          height: Metrics.appHeight * 0.1,
          backgroundColor: '#397DA4',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <ComponentButton onPress={this._onPressClose} text="Close" />
        <View />
        <ComponentButton onPress={this._onPressFinish} text="Finish" />
      </View>
    );
  };
  //hoàn thành chọn service
  _onPressFinish = () => {
    console.log('a');
    dataSelected = this.state.dataListSearch.filter(function(e) {
      return e.isSelected;
    });
    this._onPressClose();
    console.log(dataSelected);
  };
  // đóng mở Modal
  _onPressClose = () => {
    this.setState({
      ModalVisiable: !this.state.ModalVisiable,
    });
  };

  // bắt sự kiện click vào service
  _onPressItemFilterServices = (item, index) => {
    const {dataListSearch, dataSearchButton} = this.state;
    console.log('test1' + item.catname + index);
    let data = this.props.dataListSearch;
    if (item.catname === 'All Services') {
      console.log('a');
      data = data.filter(function(_item) {
        console.log(_item.catname);
        return _item.catname != 'All Services' && _item.id != -1;
      });
    } else {
      data = data.filter(function(_item) {
        console.log(_item.catname);
        return _item.catname === item.catname && _item.id != -1;
      });
    }
    console.log('test___' + JSON.stringify(data));
    this.setState({
      index,
      dataListSearch: data,
    });
  };
  // phần scroll bên trái
  _renderLeftContent = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        style={{
          width: '33%',
          height: '100%',
          backgroundColor: 'white',
        }}
        data={this.state.dataSearchButton}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => this._onPressItemFilterServices(item, index)}
            activeOpacity={0.5}
            key={index + ''}
            style={{
              width: '95%',
              height: (Metrics.appHeight * 1) / 12,
              marginHorizontal: 5,
              marginVertical: 5,
              borderRightWidth: 1,
              borderRightColor: 'gray',
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              borderTopWidth: 1,
              borderTopColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: this.state.index === index ? '#DFF0D8' : 'white',
            }}>
            <View
              style={{
                height: '100%',
                width: 10,
                backgroundColor: 'red',
                left: 0,
                position: 'absolute',
              }}></View>
            <TextCmp
              style={{
                fontSize: normalize(5),
                fontWeight: 'bold',
              }}>
              {item.catname + ''}
            </TextCmp>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.catname + index + ''}
      />
    );
  };
  //click vào item scroll right

  _onPressItemRight = (index, item) => {
    const {dataListSearch} = this.state;
    dataListSearch[
      dataListSearch.findIndex(e => e.id == item.id)
    ].isSelected = !dataListSearch[
      dataListSearch.findIndex(e => e.id == item.id)
    ].isSelected;
    this.setState({
      dataListSearch,
    });
    console.log(
      '-----B' +
        dataListSearch[dataListSearch.findIndex(e => e.id == item.id)]
          .isSelected,
    );
  };
  // phần scroll bên phải
  _renderRightContent = () => {
    return (
      <FlatList
        numColumns={2}
        style={{
          width: '67%',
          height: '100%',
          backgroundColor: 'white',
          flexWrap: 'wrap',
          paddingTop: 5,
        }}
        data={this.state.dataListSearch}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => this._onPressItemRight(index, item)}
            activeOpacity={0.5}
            key={item.id + ''}
            style={{
              width: '48%',
              backgroundColor: !item.isSelected ? '#F5F5F5' : '#DD4B39',
              marginHorizontal: 5,
              marginVertical: 5,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 13,
            }}>
            <TextCmp
              style={{
                fontSize: normalize(5),
                fontWeight: 'bold',
              }}>
              {item.name}
            </TextCmp>
            <TextCmp
              style={{
                fontSize: normalize(5),
                fontWeight: 'bold',
              }}>
              Price: ${item.price}
            </TextCmp>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    );
  };
  render() {
    const {ModalVisiable} = this.state;
    console.log('test' + JSON.stringify(this.state.dataListSearch));
    return (
      <View style={styles.flex1}>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={ModalVisiable}
          onRequestClose={() => this.setState({ModalVisiable: !ModalVisiable})}>
          <View style={styles.container}>
            <View style={styles.container1}>
              <HeaderServices onPress={this._onPressClose} />
              <View style={styles.containerCenter}>
                {this._renderLeftContent()}
                {this._renderRightContent()}
              </View>
              {this._renderBottomModal()}
            </View>
          </View>
        </Modal>
        <BottomButtonServices
          dataSelected={dataSelected}
          onPress={this._onPressClose}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex1: {flex: 1},
  container: {
    width: Metrics.appWidth,
    height: Metrics.appHeight,
    backgroundColor: 'rgba(0, 0,0,0.5)',
    alignItems: 'center',
  },
  container1: {
    width: '80%',
    // backgroundColor: 'red',
    paddingTop: Metrics.appHeight * 0.05,
  },
  containerCenter: {
    flexDirection: 'row',
    backgroundColor: '#408EBA',
    width: '100%',
    height: Metrics.appHeight * 0.7,
    padding: 10,
  },
});
