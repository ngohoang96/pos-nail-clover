import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TextCmp} from '../../../../../../themes';
import {styles} from '../styles';
import {normalize} from '../../../../../../themes/FontSize';
import ModalSelectServices from '../../select-services/ModalSelectServices';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      index: 0,

      mCatName: 'Additional Options',
    };
  }
  componentDidMount() {}

  _onPressFinish = () => {
    this._onPressClose();
  };
  toogleModal = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  _onPressLeftContent = item => {
    this.setState({
      mCatName: item.catname,
    });
    this.props.updateCatnameService(item.catname);
  };

  render() {
    const {visible} = this.state;
    const {
      typeServices,
      listServicesItem,
      typeSelected,
      updateSelectedService,
      listServices,
      listSelectedServices,
    } = this.props;
    let txt = '';
    if (listSelectedServices.length > 0) {
      listSelectedServices.map(e => (txt += e.name + ','));
    }
    return (
      <View style={{flex: 1}}>
        <View style={styles.wrapper_selectServices}>
          <TextCmp style={styles.txt_selectServices}>
            Please Select Perfer Services
          </TextCmp>
          <TouchableOpacity
            numberOfLines={1}
            activeOpacity={0.9}
            onPress={() => this.toogleModal()}
            style={styles.btn_selectServices}>
            <TextCmp>
              {txt !== '' ? txt : 'Click Here to Select Services'}
            </TextCmp>
          </TouchableOpacity>
          {visible && (
            <ModalSelectServices
              visible={visible}
              onClose={this.toogleModal}
              typeServices={typeServices}
              listServicesItem={listServicesItem}
              updateSelectedService={updateSelectedService}
              listServices={listServices}
              listSelectedServices={listSelectedServices}
            />
          )}
        </View>
      </View>
    );
  }
}
