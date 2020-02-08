import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Button2 from '../../../../Components/InitScreen/Button2';
import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import {Colors, Metrics, TextCmp} from '../../../../themes';

export default class FullMenuItem extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate({mCatName: newMCatName}) {
    return newMCatName != this.props.mCatName;
  }
  render() {
    const {item, onPress, mCatName} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.button,
          {
            backgroundColor:
              item.catname === mCatName ? '#CAE5E8' : Colors.bgGray,
          },
        ]}
        onPress={() => onPress()}>
        <TextCmp style={[styles.text]}>{item.catname}</TextCmp>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  colorBlack: {
    color: 'black',
    fontSize: normalize(4),
  },
  text: {
    color: 'black',
    fontSize: normalize(4),
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: Colors.bgGray,
    height: (Metrics.appHeight * 6) / 100,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderColor: 'gray',
    borderRightWidth: 0.5,
  },
});
