import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Colors, TextCmp} from '../../../../../themes';
import {normalize} from '../../../../../themes/FontSize';
import {actions, selectors} from '../../../../../stores';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate({inputNailsTechClockIN: newInputNailsTechClockIN}) {
    const {inputNailsTechClockIN} = this.props;
    return newInputNailsTechClockIN != inputNailsTechClockIN;
  }

  render() {
    const {inputNailsTechClockIN} = this.props;
    let tmp = '';
    if (inputNailsTechClockIN !== '') {
      for (let i = 0; i < inputNailsTechClockIN.length; ++i) {
        tmp += '*';
      }
    } else {
      tmp = '';
    }

    return (
      <View
        style={{
          flex: 0.6,
          backgroundColor: Colors.backgroundModal,
          paddingLeft: 5,
          justifyContent: 'center',
        }}>
        <TextCmp
          style={{
            flex: 1,
            paddingVertical: 5,
            fontSize: normalize(6),
            textAlignVertical: 'center',
          }}>
          {tmp}
        </TextCmp>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // inputNailsTechClockIN: selectors.home.inputNailsTechClockIN(state),
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
