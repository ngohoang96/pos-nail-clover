import React, { Component } from 'react';
import {
  View,
  Modal,
  StyleSheet,
} from 'react-native';
import { Metrics } from '../../../../../../../themes';
import { normalize } from '../../../../../../../themes/FontSize';
import MainContent from './main-content';
import HeaderServices from './header-services';

import LeftContent from './left-content/index'
import BottomContent from './bottom-content/index'
import RightContent from './right-content-services'
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisiable: false,
      index: 0,

      mCatName: 'Additional Options'
    };
  }
  componentDidMount() {

  }

  _onPressFinish = () => {
    this._onPressClose();
  };
  _onPressClose = () => {
    this.setState({
      ModalVisiable: !this.state.ModalVisiable,
    });
  };
  _onPressLeftContent = (item) => {
    this.setState({
      mCatName: item.catname
    })
    this.props.updateCatnameService(item.catname)
  }

  render() {
    const { mCatName, ModalVisiable } = this.state
    const { dataSearchButton, listService, catnameActive, updateIssuccessItemService } = this.props
    return (
      <View style={styles.flex1}>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={ModalVisiable}
          onRequestClose={() => this.setState({ ModalVisiable: !ModalVisiable })}
        >
          <View style={styles.container}>
            <View style={styles.container1}>
              <HeaderServices onPress={this._onPressClose} />
              <View style={styles.containerCenter}>
                <LeftContent
                  dataSearchButton={dataSearchButton}
                  mCatName={mCatName}
                  onPress={this._onPressLeftContent}
                />
                <RightContent
                  getlistDataServices={listService}
                  catnameCustomerServices={catnameActive}
                  onPress={(item) => updateIssuccessItemService(item)}
                />
              </View>
              <BottomContent
                _onPressClose={this._onPressClose}
                _onPressFinish={this._onPressFinish}
              />
            </View>
          </View>
        </Modal>
        <MainContent
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
