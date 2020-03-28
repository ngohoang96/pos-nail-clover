import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import {styles} from '../styles';
import {normalize} from '../../../../../../themes/FontSize';
import {TextCmp} from '../../../../../../themes';
import {actions, selectors} from '../../../../../../stores';
import ModalSelectTechnician from '../../select-technician/ModalSelectTechnician';

let tmp = '';
class SelectTechnician extends Component {
  // shouldComponentUpdate({listFinish: newdataSelected}) {
  //   return newdataSelected != this.props.listFinish;
  // }
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      techniciansText: '',
    };
  }

  toogleModal = visible => {
    this.setState({isVisible: visible});
  };

  render() {
    const {isVisible} = this.state;
    const {listTechnicians, listSelectedTechnician} = this.props;
    let txt = '';
    if (listSelectedTechnician.length > 0) {
      listSelectedTechnician.map(e => (txt += e.name + ','));
    }
    return (
      <View style={styles.wrapper_selectTechnician}>
        <TextCmp style={styles.txt_selectTechnician}>
          Please Select Perfer Nails Technician
        </TextCmp>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.toogleModal(true)}
          style={styles.btnMain}>
          <TextCmp>{txt !== '' ? txt : 'Any Nails Technician'}</TextCmp>
        </TouchableOpacity>
        {isVisible && (
          <ModalSelectTechnician
            visible={isVisible}
            onClose={this.toogleModal}
            listTechnicians={listTechnicians}
            listSelectedTechnician={listSelectedTechnician}
            updateListTechnician={this.props.updateListTechnician}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listFinish: state.home.listFinish,
  listTechnicians: state.cus.listTechnician,
  listSelectedTechnician: state.cus.listSelectedTechnician,
});

const mapDispatchToProps = dispatch => {
  const updateListTechnician = list => {
    dispatch(actions.cus.updateSelectedTechnician(list));
  };
  return {
    updateListTechnician,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectTechnician);
