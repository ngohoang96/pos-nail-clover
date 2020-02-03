import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Button2 from '../../../../Components/InitScreen/Button2';
import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import {Colors} from '../../../../themes';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate({mCatName: newMCatName}) {
    return newMCatName != this.props.mCatName;
  }
  render() {
    const {item, onPress, mCatName} = this.props;
    return (
      <Button2
        Textstyle={styles.colorBlack}
        onPress={() => onPress(item)}
        style_button={{
          width: 100,
          minHeight: '100%',
          borderLeftColor:
            '#' + (Math.random().toString(16) + '000000').substring(2, 8),
          paddingVertical: 10,
          backgroundColor:
            item.catname === mCatName ? '#CAE5E8' : Colors.bgGray,
        }}
        lable={item.catname}
        textstyles={{fontWeight: 'bold'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  colorBlack: {
    color: 'black',
    fontSize: normalize(4),
  },
});
