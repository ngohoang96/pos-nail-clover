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

import themes from '../../../config/themes';
import {normalize} from '../../../themes/FontSize';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {data} from '../../../Components/InitScreen/mockData';
import {TextCmp, Metrics, Colors} from '../../../themes';
export default class ScrollBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={[
            styles.wrapper_list_button,

            // {width: ((Metrics.appWidth * 12) / 100) * data.length},
          ]}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.onPressItem(item.lable)}
                key={index}
                activeOpacity={0.7}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      item.lable === 'PAYMENT' ? Colors.orange : Colors.bgGray,
                  },
                ]}>
                <View style={styles.center}>
                  <TextCmp style={styles.txtLabel}>{item.lable}</TextCmp>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {height: 20, paddingLeft: 15, backgroundColor: '#E6E6E6'},
  button: {
    height: 60,
    borderWidth: 0.5,
    borderRightColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgGray,
    width: (Metrics.appWidth * 12) / 100,
    // paddingVertical: 5
  },
  wrapper_list_button: {
    // flex: 1,
    height: 60,
    alignSelf: 'stretch',
    // padding: 5,
    // height: 80,
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  center: {alignItems: 'center', justifyContent: 'center'},
  txtLabel: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 1,
    fontSize: normalize(4),
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 0,
  },
  container: {
    borderTopWidth: 1,
    borderTopColor: '#C1C1C1',
    // backgroundColor: 'red',
    bottom: 0,
    position: 'absolute',
    right: 0,
    left: 0,
    height: 60,
    // paddingVertical: 2,
  },
});
