import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { TextCmp } from '../../../../../../../../themes';
import { normalize } from '../../../../../../../../themes/FontSize';
import { truncateText } from '../../../../../../../../utils/functions';
import { Logg } from '../../../../../../../../utils';

import { connect } from 'react-redux';
import { actions, selectors } from '../../../../../../../../stores';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // shouldComponentUpdate({dataSelected: newData}) {
  //   return newData != this.props.dataSelected;
  // }
  render() {
    const { getdataSelectedPerferService } = this.props;
    let tmp = '';
    // console.log(tmp + 'tmp');
    for (let i = 0; i < getdataSelectedPerferService.length; ++i) {
      if (getdataSelectedPerferService[i].isSelected)
        tmp = tmp + getdataSelectedPerferService[i].name + ' ,';
    }
    Logg.info(
      '__dataSelected__',
      getdataSelectedPerferService.filter(e => e.isSelected),
      getdataSelectedPerferService.filter(e => e.isSelected).length,
    );
    return (
      <View style={styles.container}>
        <TextCmp style={styles.txtTitle}>Please Select Perfer Services</TextCmp>
        <TouchableOpacity
          numberOfLines={1}
          activeOpacity={0.9}
          onPress={() => this.props.onPress()}
          style={styles.btn}>
          <TextCmp
            numberOfLines={1}
            style={{
              fontSize: normalize(5),
              alignContent: 'center',
              textAlignVertical: 'center',
              marginLeft: 2,
            }}>
            {tmp}
          </TextCmp>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getdataSelectedPerferService: selectors.test.getdataSelectedPerferService(
    state,
  ),
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'flex-end',
    paddingHorizontal: '5%',
  },
  txtTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  btn: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 5,
    height: '50%',
    flexDirection: 'row',
  },
});
