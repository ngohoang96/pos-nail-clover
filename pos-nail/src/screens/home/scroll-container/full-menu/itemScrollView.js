import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Button2 from '../../../../Components/InitScreen/Button2';
import themes from '../../../../config/themes';
import { normalize } from '../../../../themes/FontSize';

export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate({ mCatName: newMCatName }) {
    return newMCatName != this.props.mCatName
  }
  render() {
    const { item, onPress, mCatName } = this.props
    return (
      <Button2
        Textstyle={styles.colorBlack}
        onPress={() => onPress(item)}
        style_button={{
          width: '100%',
          minHeight: ((((themes.width * 3) / 3.8) * 0.5) / 3.9) * 0.3,
          borderLeftColor: '#' + (Math.random().toString(16) + "000000").substring(2, 8),
          paddingVertical: 10,
          backgroundColor: item.catname === mCatName ? '#CAE5E8' : '#fff'
        }}
        lable={item.catname}
        textstyles={{ fontWeight: '300' }}
      >

      </Button2>
    );
  }
}

const styles = StyleSheet.create({
  colorBlack: {
    color: 'black',
    fontSize: normalize(4)
  },
});
