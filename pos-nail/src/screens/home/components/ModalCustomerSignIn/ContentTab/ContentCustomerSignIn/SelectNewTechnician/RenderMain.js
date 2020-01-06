import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextCmp } from '../../../../../../../themes';
import { normalize } from '../../../../../../../themes/FontSize';

import { connect } from 'react-redux';
import { actions, selectors } from '../../../../../../../stores';
let tmp = '';
export class RenderMain extends Component {
  shouldComponentUpdate({ listFinish: newdataSelected }) {
    return newdataSelected != this.props.listFinish;
  }
  render() {
    console.log('tmp ' + JSON.stringify(this.props.listFinish));
    tmp = '';
    if (this.props.listFinish) {
      for (let i = 0; i < this.props.listFinish.length; ++i) {
        if (this.props.listFinish[i].isSelected)
          tmp = tmp + this.props.listFinish[i].name + ' ,';
      }
    }
    console.log('tmp ' + tmp);
    return (
      <View style={styles.containerMain}>
        <TextCmp style={styles.txtMain}>
          Please Select Perfer Nails Technician
        </TextCmp>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.props.onPressClose()}
          style={styles.btnMain}>
          <TextCmp
            style={{
              fontSize: normalize(5),
              alignContent: 'center',
              textAlignVertical: 'center',
              marginLeft: 3,
            }}>
            {tmp || ''}
          </TextCmp>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listFinish: state.test.listFinish,
});

const mapDispatchToProps = dispatch => {
  // };
  //   const updateList = list => {
  //     dispatch(actions.test.updateListFinish(list));
  //   };
  return {
    // updateList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RenderMain);

const styles = StyleSheet.create({
  containerMain: {
    flex: 1, justifyContent: 'flex-end',
    paddingHorizontal: '5%',
  },
  txtMain: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  btnMain: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 5,
    height: '50%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
