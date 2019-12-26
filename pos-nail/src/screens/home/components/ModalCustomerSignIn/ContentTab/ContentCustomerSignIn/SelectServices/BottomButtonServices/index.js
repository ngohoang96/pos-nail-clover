import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextCmp} from '../../../../../../../../themes';
import {normalize} from '../../../../../../../../themes/FontSize';
import {truncateText} from '../../../../../../../../utils/functions';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    let tmp = '';
    console.log(tmp + 'tmp');
    for (let i = 0; i < this.props.dataSelected.length; ++i) {
      tmp = tmp + this.props.dataSelected[i].name + ' ,';
    }
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

export default index;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end'},
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
