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
          contentContainerStyle={styles.wrapper_list_button}>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => this.props.onPressItem(item.lable)}
                key={item.id}
                activeOpacity={0.7}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      item.lable === 'PAYMENT' ? Colors.orange : Colors.bgGray,
                  },
                ]}>
                {/* <IonIcon
                  name={item.icon}
                  color={'#444444'}
                  size={normalize(5)}
                /> */}
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
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgGray,
    width: '10%',
    // paddingVertical: 5
  },
  wrapper_list_button: {
    // padding: 5,
    // height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Metrics.appWidth,
  },
  center: {alignItems: 'center', justifyContent: 'center'},
  txtLabel: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 1,
    fontSize: normalize(4),
    fontWeight: 'bold',
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
