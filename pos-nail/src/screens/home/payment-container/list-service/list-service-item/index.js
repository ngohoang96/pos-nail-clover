import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {TextCmp} from '../../../../../themes';
import {styles} from './styles';
import {actions, selectors} from '../../../../../stores';
import {Logg} from '../../../../../utils';
import Input from '../../../../../common-components/Input';

class ListServicesItem extends Component {
  shouldComponentUpdate({service: newService}) {
    return newService !== this.props.service;
  }

  constructor(props) {
    super(props);
    this.state = {
      quantity: '',
      amount: '',
      tip: '',
    };
  }

  updateQuantity = quantity => {
    this.props.updateQuantity(quantity);
    this.setState({quantity});
  };

  updateAmount = amount => {
    this.props.updateAmount(amount);
  };

  render() {
    const {service} = this.props;
    Logg.info('item service xx', service.quantity);
    return (
      <View style={styles.container}>
        <View style={styles.wrapper_service}>
          <TextCmp>{service.service}</TextCmp>
        </View>
        <View style={styles.wrapper_technician}>
          <TextCmp>{service.name}</TextCmp>
        </View>
        <Input value={service.quantity} onChangeText={this.updateQuantity} />
        <Input value={service.amount} onChangeText={this.props.updateAmount} />
        <Input value={service.tip} />
      </View>
    );
  }
}

const mapStateToProps = (state, {index}) => ({
  service: selectors.home.selectListServicesItem(state, index),
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
  return {
    updateQuantity,
    updateAmount,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListServicesItem);
