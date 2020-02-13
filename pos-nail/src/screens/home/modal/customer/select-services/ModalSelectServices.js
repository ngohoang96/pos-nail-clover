import React, {Component} from 'react';
import {FlatList, View, Modal, StyleSheet} from 'react-native';

import {Metrics, Colors} from '../../../../../themes';
import HeaderServices from './header-services';
import ContentServices from './content-services/ContentServices';
import Bottom from './bottom/Bottom';
import {Logg} from '../../../../../utils';
import ServiceItem from './services/ServiceItem';

export default class ModalSelectServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listSelected: [],
      typeServices: [],
      typeSelected: 'All Services',
    };
  }

  UNSAFE_componentWillMount() {
    const {listServices, listSelectedServices} = this.props;
    let {listSelected} = this.state;
    let list = listServices.filter(e => e.id !== -1);
    if (listSelectedServices.length > 0) {
      list.map(e => {
        let tempArray = [];

        tempArray = listSelectedServices.filter(x => x.id === e.id);
        if (tempArray.length > 0) {
          listSelected.push(e);
          this.setState({listSelected});
        }
      });
      this.setState({list: listServices.filter(e => e.id !== -1)});
    } else {
      this.setState({list: listServices.filter(e => e.id !== -1)});
    }
  }

  updateSelectedType = value => {
    const {typeSelected} = this.state;
    if (typeSelected !== value && value === 'All Services') {
      const {listServices} = this.props;
      const {listSelected} = this.state;
      this.setState({
        list: listServices.filter(e => e.id !== -1),
        typeSelected: value,
      });
    } else {
      if (value !== typeSelected) {
        let {listServices} = this.props;
        let list = [];
        list = listServices.filter(x => x.catname === value && x.id !== -1);
        this.setState({typeSelected: value, list});
      }
    }
  };

  _renderItem = (item, index) => {
    let {listSelected} = this.state;
    let array = listSelected;
    let isSelected = false;
    let findId = [];
    findId = array.filter(x => x.id === item.id);
    if (findId.length > 0) {
      isSelected = true;
    }

    return (
      <ServiceItem
        index={index}
        key={index}
        item={item}
        isActive={isSelected}
        onPress={this.updateSeletedArray}
      />
    );
  };

  _keyExtractor = (item, index) => index.toString();

  updateSeletedArray = (value, index) => {
    let {listSelected, list} = this.state;
    let findId = [];
    if (listSelected.length > 0) {
      findId = listSelected.filter(e => e.id === value.id);
      if (findId.length > 0) {
        let listTemp = [];
        listTemp = listSelected.filter(x => x.id !== value.id);
        this.setState({listSelected: listTemp});
      } else {
        listSelected.push(value);
        this.setState({listSelected});
      }
    } else {
      listSelected.push(value);
      this.setState({listSelected});
    }
  };

  onPressFinish = () => {
    this.props.updateSelectedService(this.state.listSelected);
    this.props.onClose();
  };

  onPressClose = () => {
    this.props.onClose();
  };
  render() {
    const {visible, onClose, typeServices} = this.props;
    const {list, typeSelected, listSelected} = this.state;
    return (
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => onClose()}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <HeaderServices onPress={onClose} />
            <View style={styles.content}>
              <ContentServices
                typeServices={typeServices}
                updateSelectedService={this.updateSelectedType}
                typeSelected={typeSelected}
              />
              <View style={styles.wrapper_services}>
                <FlatList
                  data={list}
                  renderItem={({item, index}) => this._renderItem(item, index)}
                  keyExtractor={this._keyExtractor}
                  numColumns={3}
                />
              </View>
            </View>
            <Bottom
              onPressClose={this.onPressClose}
              onPressFinish={this.onPressFinish}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  wrapper: {
    width: (Metrics.appWidth * 70) / 100,
    height: (Metrics.appHeight * 60) / 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundModal,
  },
  content: {flexDirection: 'row', width: '100%', height: '80%'},
  wrapper_services: {
    flex: 7,
    paddingHorizontal: 5,
  },
});
