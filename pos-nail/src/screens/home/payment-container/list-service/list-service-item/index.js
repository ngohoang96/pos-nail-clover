import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {TextCmp} from '../../../../../themes';
import {styles} from './styles';
import {actions, selectors} from '../../../../../stores';
import {Logg} from '../../../../../utils';
import Input from '../../../../../common-components/Input';

class ListServicesItem extends Component {
  shouldComponentUpdate({
    item: newItem,
    quantity: newQuantity,
    amount: newAmount,
    tip: newTip,
  }) {
    return (
      newItem !== this.props.item ||
      newQuantity !== this.props.quantity ||
      newAmount !== this.props.amount ||
      newTip !== this.props.tip
    );
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
    const {quantity, item, amount, tip} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper_service}>
          <TextCmp>{item.service}</TextCmp>
        </View>
        <View style={styles.wrapper_technician}>
          <TextCmp>{item.name}</TextCmp>
        </View>
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
