import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {TextCmp} from '../../../../../themes';
import {styles} from './styles';
import {actions, selectors} from '../../../../../stores';
import {Logg} from '../../../../../utils';
import Input from '../../../../../common-components/Input';
import {homeIcon} from '../../../../../assets';

class ListServicesItem extends Component {
  shouldComponentUpdate({
    item: newItem,
    quantity: newQuantity,
    amount: newAmount,
    tip: newTip,
    idTechnician: newIdTechnician,
    serviceId: newServiceId,
  }) {
    return (
      newItem !== this.props.item ||
      newQuantity !== this.props.quantity ||
      newAmount !== this.props.amount ||
      newTip !== this.props.tip ||
      newIdTechnician !== this.props.idTechnician ||
      newServiceId !== this.props.serviceId
    );
  }

  componentDidUpdate(prevProps) {
    const {tip} = this.props;
    if (prevProps.tip !== this.props.tip) {
      this.props.updateTip(tip + '');
    }
  }
  updateQuantity = quantity => {
    this.props.updateQuantity(quantity);
  };

  updateAmount = amount => {
    this.props.updateAmount(amount);
  };

  updateTip = tip => {
    this.props.updateTip(tip);
  };

  render() {
    const {
      quantity,
      item,
      amount,
      deleteSelectedService,
      index,
      openModalChangeTechnician,
      openModalChangeService,
    } = this.props;
    let {tip} = this.props;
    if (tip !== '') {
      tip = parseFloat(tip);
      if (parseInt(tip) === tip) {
        tip = tip + '';
      } else {
        tip = tip.toFixed(2) + '';
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.wrapper_service}>
          <TouchableOpacity onPress={() => openModalChangeService(index)}>
            <TextCmp>{item.service}</TextCmp>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => deleteSelectedService(item)}
            style={{width: 20, height: 20, alignItems: 'center'}}>
            <Image source={homeIcon.trash} style={{width: 15, height: 15}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.wrapper_technician}
          onPress={() => openModalChangeTechnician(index)}>
          <TextCmp>{item.name}</TextCmp>
        </TouchableOpacity>
        <Input value={quantity} onChangeText={this.updateQuantity} />
        <Input value={amount} onChangeText={this.updateAmount} />
        <Input value={tip} onChangeText={this.updateTip} />
      </View>
    );
  }
}

const mapStateToProps = (state, {index}) => ({
  item: selectors.home.selectListServicesItem(state, index),
});

const mapDispatchToProps = (dispatch, {index}) => {
  const updateQuantity = quantity => {
    let data = {index, quantity};
    dispatch(actions.home.updateQuantityService(data));
  };
  const updateAmount = amount => {
    let data = {index, amount};
    dispatch(actions.home.updateAmountService(data));
  };
  const updateTip = tip => {
    let data = {index, tip};
    dispatch(actions.home.updateTipService(data));
  };
  return {
    updateQuantity,
    updateAmount,
    updateTip,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListServicesItem);
