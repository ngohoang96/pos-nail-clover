import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Metrics, TextCmp, Colors} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';
import {Logg} from '../../../../../utils';
import {homeIcon} from '../../../../../assets';
import BottomSelectTechnician from './BottomModal';
import HeaderModalSelectTechnician from './HeaderModalSelectTech/';
import SelectTechnicianItem from './select-technician-item';
export default class ModalSelectTechnician extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTechnicianFormat: [],
      techniciansText: '',
    };
  }

  UNSAFE_componentWillMount() {
    const {listSelectedTechnician} = this.props;
    let listTechnicianFormat = this.props.listTechnicians;
    listTechnicianFormat.map(e => {
      let idExist = [];
      idExist = listSelectedTechnician.filter(x => x.id === e.id);
      if (idExist.length > 0) {
        e.selected = true;
      } else {
        e.selected = false;
      }
      e.name = e.first_name + ' ' + e.last_name;
    });

    this.setState({
      listTechnicianFormat,
    });
  }

  renderItem = ({item, index}) => {
    return (
      <SelectTechnicianItem
        item={item}
        index={index}
        updateListSelected={this.updateListSelected}
        selected={item.selected}
      />
    );
  };

  updateListSelected = (item, index) => {
    let {listTechnicianFormat} = this.state;
    listTechnicianFormat[index].selected = !listTechnicianFormat[index]
      .selected;
    this.setState({listTechnicianFormat});
  };

  _onPressFinish = () => {
    const {updateListTechnician} = this.props;
    this.props.onClose(false);
    let {listTechnicianFormat} = this.state;
    let list = [];
    list = listTechnicianFormat.filter(e => e.selected === true);
    updateListTechnician(list);
  };

  _onPressClose = () => {
    this.props.onClose(false);
  };
  render() {
    const {visible, onClose, listTechnicians} = this.props;
    return (
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => onClose(false)}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <HeaderModalSelectTechnician onClose={this._onPressClose} />
            <FlatList
              data={this.state.listTechnicianFormat}
              keyExtractor={(item, index) => index}
              renderItem={this.renderItem}
              numColumns={3}
              contentContainerStyle={{padding: 5}}
            />
            <BottomSelectTechnician
              onPressFinish={this._onPressFinish}
              onPressClose={this._onPressClose}
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
    width: (Metrics.appWidth * 65) / 100,
    height: (Metrics.appHeight * 60) / 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundModal,
    flexWrap: 'wrap',
  },
});
