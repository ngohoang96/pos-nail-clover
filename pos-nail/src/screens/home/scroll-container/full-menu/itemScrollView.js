import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';
import Button2 from '../../../../Components/InitScreen/Button2';
import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import TextCmp from '../../../../themes/TextCmp';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button2
        Textstyle={styles.colorBlack}
        style_button={{
          width: '100%',
          height: ((((themes.width * 3) / 3.8) * 0.5) / 3.9) * 0.3,
          borderLeftColor: this.props.code,
        }}
        lable={'Machine'}></Button2>
    );
  }
}

const styles = StyleSheet.create({
  colorBlack: {color: 'black',
  fontSize : normalize(4)},
});
