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
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisiable: false,
      dataFinish: [],
      index: 0,
      listadd: [],
    };
  }
  componentDidMount() {
    const {listFinish} = this.props;
    const {listadd} = this.state;
    //gán lại check mỗi khi render lên
    for (let i = 0; i < listFinish.length; ++i) {
      if (listFinish[i].isSelected) {
        listadd.push(listFinish[i]);
      }
    }
    this.setState({listadd});
  }
  //tắt modal
  _onPressClose = () => {
    this.setState({
      ModalVisiable: !this.state.ModalVisiable,
    });
  };
  //hoàn thành gửi list vừa check sang redux update lại
  _onPressFinish = () => {
    this.props.updateListTechnician(this.state.listadd);
    this._onPressClose();
  };

  //bấm vào item thay đổi state để đổi màu và gán vào listAdd
  pressitem = (index, item) => {
    let listadd = this.state.listadd;

    if (listadd.findIndex(obj => obj.name === item.name) == -1) {
      listadd.push(item);
    } else {
      listadd = listadd.filter(_item => _item.name !== item.name);
    }

    this.setState({index: index, listadd});
  };
  render() {
    const {listFinish} = this.props;
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.ModalVisiable}
          onRequestClose={this._onPressClose}>
          <View style={styles.container}>
            <View style={{width: '80%'}}>
              <Header onPress={this._onPressClose} />
              <ScrollView style={styles.centerModalScrollview}>
                <View style={styles.contanerScrollView}>
                  {listFinish &&
                    listFinish.map((item, index) => {
                      return (
                        <ItemScroll
                          containerStyle={{
                            backgroundColor:
                              this.state.listadd.findIndex(
                                obj => obj.name === item.name,
                              ) != -1
                                ? '#5F1AB7'
                                : '#95C700',
                          }}
                          key={index + ' '}
                          itemStaffs={item}
                          onPress={() => this.pressitem(index, item)}
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
        <RenderMain onPressClose={this._onPressClose} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listFinish: state.home.listFinish,
});

const mapDispatchToProps = dispatch => {
  const updateListTechnician = data => {
    dispatch(actions.home.updateListTechnician(data));
  };
  return {
    updateListTechnician,
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
