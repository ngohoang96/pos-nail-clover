import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import {actions, selectors} from '../../../../../../../stores';

import {TextCmp, Metrics} from '../../../../../../../themes';
import {normalize} from '../../../../../../../themes/FontSize';
import ItemTech from '../../../../../../../Components/InitScreen/itemTech';
import ComponentButton from '../../../BottomButton/ComponentButton';
import {iconsScroll} from '../../../../../../../assets';
import Header from './HeaderModalSelectTech';
import BottomModal from './BottomModal';
import ItemScroll from './container/ItemScrollViewModal';
import {Logg} from '../../../../../../../utils';
import RenderMain from './RenderMain';
let data_ = [];
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisiable: false,

      dataStaffs: [],
      dataNameMain: null,
      dataFinish: [],
    };
  }
  componentDidMount() {
    this.setState({
      dataStaffs: this.props.listFinish,
    });
    console.log('tao đang test ' + this.state.dataStaffs);
  }
  _onPressClose = () => {
    this.setState({
      ModalVisiable: !this.state.ModalVisiable,
    });
  };
  _onPressFinish = () => {
    const {dataStaffs} = this.state;
    if (dataStaffs && dataStaffs.length > 0) {
      this.props.updateList(dataStaffs);
    }
    this._onPressClose();
    // alert();
  };
  _renderMain = () => {
    return (
      <View style={styles.containerMain}>
        <TextCmp style={styles.txtMain}>
          Please Select Perfer Nails Technician
        </TextCmp>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.setState({
              ModalVisiable: !this.state.ModalVisiable,
            });
          }}
          style={styles.btnMain}
        />
      </View>
    );
  };

  _onPressItem = _itemStaffs => {
    const {dataStaffs} = this.state;
    let _index = dataStaffs.findIndex(e => e.id === _itemStaffs.id);
    dataStaffs[_index].isSelected = !dataStaffs[_index].isSelected;
    this.setState({
      dataStaffs,
    });

    console.log(
      '_itemStaffs ' +
        JSON.stringify(_itemStaffs) +
        '\n' +
        JSON.stringify(dataStaffs),
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.ModalVisiable}
          onRequestClose={() =>
            this.setState({ModalVisiable: !this.state.ModalVisiable})
          }>
          <View style={styles.container}>
            <View style={{width: '80%'}}>
              <Header onPress={this._onPressClose} />
              <ScrollView style={styles.centerModalScrollview}>
                <View style={styles.contanerScrollView}>
                  {this.state.dataStaffs.map((item, index) => {
                    return (
                      <ItemScroll
                        key={index + ' '}
                        itemStaffs={item}
                        onPress={this._onPressItem}
                      />
                    );
                  })}
                </View>
              </ScrollView>
              <BottomModal
                onPressFinish={this._onPressFinish}
                onPressClose={this._onPressClose}
              />
            </View>
          </View>
        </Modal>
        <RenderMain
          // dataSelected={this.props.listFinish}
          onPressClose={this._onPressClose}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listFinish: state.test.listFinish,
});

const mapDispatchToProps = dispatch => {
  // };
  const updateList = list => {
    dispatch(actions.test.updateListFinish(list));
  };
  return {
    updateList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    width: Metrics.appWidth,
    height: Metrics.appHeight,
    backgroundColor: 'rgba(0, 0,0,0.5)',
    alignItems: 'center',
    paddingTop: '10%',
  },
  containerMain: {flex: 1, justifyContent: 'flex-end'},
  txtMain: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  btnMain: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 5,
    height: '50%',
  },
  centerModalScrollview: {
    width: '100%',
    backgroundColor: '#408EBA',
    paddingVertical: '3%',
  },
  contanerScrollView: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    width: Metrics.appWidth * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
