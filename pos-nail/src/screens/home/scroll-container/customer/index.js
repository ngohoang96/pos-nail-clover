import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';

import ItemCustomer from '../../../../Components/InitScreen/CustomerItem';
import {TextCmp, Colors} from '../../../../themes';
import {selectors} from '../../../../stores';
import {connect} from 'react-redux';
import CustomerItem from '../../../../Components/InitScreen/CustomerItem';

class Customer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {listCutomers} = this.props;
    return (
      <View style={styles.fx1PL2}>
        <View style={styles.containerTxt}>
          <TextCmp style={styles.txtLabel}>Customer</TextCmp>
        </View>
        <ScrollView style={styles.fx1}>
          {listCutomers.map((item, index) => {
            return <CustomerItem key={index} index={index} item={item} />;
          })}
        </ScrollView>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};
const mapStateToProps = state => ({
  listCutomers: selectors.home.selectCustomer(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
const styles = StyleSheet.create({
  fx1PL2: {flex: 1, zIndex: -1},
  containerTxt: {
    height: themes.height / 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgGray,
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  txtLabel: {
    alignItems: 'center',
    color: 'black',
    fontSize: normalize(5),
  },
  fx1: {flex: 1},
});
