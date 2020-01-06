import React, { Component } from 'react';
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
import { TextCmp, Metrics, Fonts } from '../../../../../../../themes';
import { normalize } from '../../../../../../../themes/FontSize';
import { iconsScroll } from '../../../../../../../assets';
import ComponentButton from '../../../BottomButton/ComponentButton';
import BottomButtonServices from './BottomButtonServices';
import HeaderServices from './HeaderServices';
import { Logg } from '../../../../../../../utils';

// let dataSelected = [];
let dataRightServices = [[]];
// let data_index_indexEnd = [];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisiable: false,
      // Data_Services,
      listAdd: [],
      dataListSearch: [],
      dataSearchButton: [],
      index: 0,
    };
  }
  componentDidMount() {
    const { getlistDataServices, dataSearchButton } = this.props;
    this.setState({
      dataListSearch: getlistDataServices.filter(function (item) {
        return item.id != -1;
      }),
      dataSearchButton: dataSearchButton,
      listAdd: this.props.getdataSelectedPerferService
    });
    Logg.info('____Props_____', this.props);

    let tmp = 0;
    for (let i = 1; i < dataSearchButton.length; ++i) {
      // dataRightServices.push([]);

      let __dataTmp__ = [];
      let _index_ = getlistDataServices.findIndex(
        e => e.catname === dataSearchButton[i].catname,
      );
      let _indexEnd_ = 0;
      if (i != dataSearchButton.length - 1) {
        _indexEnd_ = getlistDataServices.findIndex(
          e => e.catname === dataSearchButton[i + 1].catname,
        );
      } else {
        _indexEnd_ = getlistDataServices.length;
      }

      Logg.info('______index_________', _index_, '_____', _indexEnd_);

      for (let j = _index_ + 1; j < _indexEnd_; ++j) {
        dataRightServices[0].push(getlistDataServices[j]);
        Logg.info(
          '_____t________',
          i,
          tmp,
          dataSearchButton[i].catname,
          getlistDataServices[j].id,
          getlistDataServices[j].catname,
          j,
        );
        if (
          getlistDataServices[j].id !== -1 &&
          getlistDataServices[j].catname === dataSearchButton[i].catname
        ) {
          // Logg.info('_____add here________');
          __dataTmp__.push(getlistDataServices[j]);
          // Logg.info('__dataTmp__add', __dataTmp__);
        }
      }

      dataRightServices.push(__dataTmp__);
    }
    Logg.info('____dataRightServices_____', JSON.stringify(dataRightServices));
    // Logg.info('______dataTmp_______', __dataTmp__);
  }

  //hoàn thành chọn service
  _onPressFinish = () => {
    console.log(
      'a' + JSON.stringify(this.state.listAdd) + this.state.listAdd.length,
    );
    this.props.updateDataPerferService(
      this.state.listAdd.filter(e => e.isSelected === true),
    );
    this._onPressClose();
    // console.log(dataSelected);
  };
  // đóng mở Modal
  _onPressClose = () => {
    this.setState({
      ModalVisiable: !this.state.ModalVisiable,
    });
  };

  // bắt sự kiện click vào service
  _onPressItemFilterServices = (item, index) => {
    this.setState({
      index,
      dataListSearch: dataRightServices[index],
    });
  };

  //click vào item scroll right

  _onPressItemRight = (index, item) => {
    const { dataListSearch } = this.state;
    // let _index = dataListSearch.findIndex(e => e.id == item.id);
    // dataListSearch[_index].isSelected = !dataListSearch[_index].isSelected;
    // this.setState({
    //   dataListSearch,
    // });
    // Logg.info('___item___', JSON.stringify(item));

    let _listadd = this.state.listAdd;

    // Logg.info('____datalistadd____', JSON.stringify(_listadd));
    if (
      _listadd.findIndex(obj => obj.id === item.id && obj.name === item.name) ==
      -1
    ) {
      // alert(listadd.findIndex((obj) => obj.name === item.name));
      _listadd.push(item);
    } else {
      let _index = _listadd.findIndex(
        e => e.id === item.id && e.name === item.name,
      );
      // console.log('logg -' + _index);
      _listadd.splice(_index, 1);
    }
    // let tmp = dataListSearch.findIndex(
    //   e => e.id === item.id && e.name === item.name,
    // );

    let tmp1 = dataRightServices[0].findIndex(
      e => e.id === item.id && e.name === item.name,
    );

    console.log('___tmp1___' + tmp1 + '_____' + index);
    // if (dataListSearch[index].catname != 'All Services') {
    //   console.log('logg -' + dataListSearch[index].catname);
    //   dataListSearch[index].isSelected = !dataListSearch[index].isSelected;
    // dataRightServices[0][tmp1].isSelected = !dataRightServices[tmp1]
    //   .isSelected;
    // } else {
    dataListSearch[index].isSelected = !dataListSearch[index].isSelected;
    // dataRightServices[0][tmp1].isSelected = !dataRightServices[tmp1]
    //   .isSelected;
    // }

    // Logg.info(
    //   '___dataListSearchisSelected___',
    //   dataListSearch[tmp].isSelected,
    //   JSON.stringify(dataListSearch[tmp]),
    // );
    // Logg.info(
    //   '__---___',
    //   dataRightServices[0][0].name,
    //   dataListSearch[tmp].name,
    // );

    this.setState({
      dataListSearch,
      listadd: _listadd,
    });

    // this.setState({listadd: _listadd});
    // alert('___lisAdd___'+ JSON.stringify(_listadd));

    // console.log(
    //   '-----B' +
    //     dataListSearch[dataListSearch.findIndex(e => e.id == item.id)]
    //       .isSelected,
    // );
  };

  //item right click test thôi 
  _itemRightClickTest = (Index, Item) => {
    const { listAdd, dataListSearch, dataSearchButton, index } = this.state


    Logg.info('_test_', JSON.stringify(listAdd), '\n', JSON.stringify(dataListSearch),
      '\n', JSON.stringify(dataSearchButton), '\n', index, '\n', Index, '\n', Item)
  }
  // phần scroll bên trái
  _renderLeftContent = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        style={styles.containerListLeftContent}
        data={this.state.dataSearchButton}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => this._onPressItemFilterServices(item, index)}
            activeOpacity={0.5}
            key={index + ''}
            style={[
              styles.containerItemLeftContent,
              {
                backgroundColor:
                  this.state.index === index ? '#DFF0D8' : 'white',
              },
            ]}>
            <View style={styles.VContentLeft}></View>
            <TextCmp style={styles.txtBoldNO5}>{item.catname + ''}</TextCmp>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.catname + index + ''}
      />
    );
  };
  // bottom Modal
  _renderBottomModal = () => {
    return (
      <View style={styles.containerBottomModal}>
        <ComponentButton onPress={this._onPressClose} text="Close" />
        <View />
        <ComponentButton onPress={this._onPressFinish} text="Finish" />
      </View>
    );
  };
  // phần scroll bên phải
  _renderRightContent = () => {
    return (
      <FlatList
        numColumns={2}
        style={styles.containerListRightContent}
        data={this.state.dataListSearch}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => this._onPressItemRight(index, item)}
            // onPress={() => this._itemRightClickTest(index, item)}
            activeOpacity={0.9}
            key={item.id + ''}
            style={[
              styles.containerItemRightContent,
              {
                backgroundColor: !item.isSelected ? '#F5F5F5' : '#DD4B39',
              },
            ]}>
            <TextCmp style={styles.txtBoldNO5}>{item.name}</TextCmp>
            <TextCmp style={styles.txtBoldNO5}>Price: ${item.price}</TextCmp>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    );
  };
  render() {
    const { ModalVisiable } = this.state;
    // console.log('test' + JSON.stringify(this.state.dataListSearch));
    return (
      <View style={styles.flex1}>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={ModalVisiable}
          onRequestClose={() => this.setState({ ModalVisiable: !ModalVisiable })}>
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
          // dataSelected={this.props.getdataSelectedPerferService}
          onPress={this._onPressClose}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex1: { flex: 1 },
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
  containerBottomModal: {
    width: Metrics.appWidth * 0.8,
    height: Metrics.appHeight * 0.1,
    backgroundColor: '#397DA4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerListRightContent: {
    width: '67%',
    height: '100%',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    paddingTop: 5,
  },
  containerItemRightContent: {
    width: '48%',
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
  },
  txtBoldNO5: {
    fontSize: normalize(5),
    fontWeight: 'bold',
  },
  containerListLeftContent: {
    width: '33%',
    height: '100%',
    backgroundColor: 'white',
  },
  containerItemLeftContent: {
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
  },
  VContentLeft: {
    height: '100%',
    width: 10,
    backgroundColor: 'red',
    left: 0,
    position: 'absolute',
  },
});
