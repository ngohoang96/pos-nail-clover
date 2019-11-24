import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import themes from '../../../config/themes';
import {Colors} from '../../../themes';
import {normalize} from '../../../utils/FontSize';
import {TextCmp} from '../../../common-components/index';

export default (props = {}) => {
  return (
    <View style={{flex: 3.3}}>
      <View style={styles.c1}>
        <View style={styles.ctxtInpL1}>
          <View style={styles.cInp}>
            <TextInput
              placeholder="Phone (*)"
              style={styles.txtInp}></TextInput>
          </View>
          <View style={[styles.cInp, {marginLeft: 5}]}>
            <TextInput
              placeholder="Referal code"
              style={styles.txtInp}></TextInput>
          </View>
        </View>
        <View style={styles.cL2}>
          <View
            style={[
              styles.cInp,
              {
                backgroundColor: Colors.blueBack,
                justifyContent: 'center',
                flexDirection: 'row',
              },
            ]}>
            <View style={styles.cInpFirstName}>
              <TextInput
                placeholder="First name (*)"
                style={styles.txtInp}></TextInput>
            </View>
            <View style={styles.cInpLastName}>
              <TextInput
                placeholder="Last name (*)"
                style={styles.txtInp}></TextInput>
            </View>
          </View>
          <View style={styles.cInpAddress}>
            <TextInput
              placeholder="Email Address"
              style={styles.txtInp}></TextInput>
          </View>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: Colors.blueBack}}>
        <TextCmp style={styles.txtBirthDay}>Birth day</TextCmp>
        <View style={{flex: 1, backgroundColor: Colors.blueBack, marginTop: 5}}>
          <View style={styles.cL3}>
            <View style={styles.cInpMonth}>
              <TextInput
                placeholder="Phone (*)"
                style={styles.txtInp}></TextInput>
            </View>
            <View style={styles.cInpDate}>
              <TextInput
                placeholder="Phone (*)"
                style={styles.txtInp}></TextInput>
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: Colors.blueBack, marginTop: 5}}>
          <View style={styles.cL4}>
            <View style={styles.cInpAddress}>
              <TextInput
                placeholderTextColor="black"
                placeholder="Address"
                style={styles.txtInp}></TextInput>
            </View>
            <View style={styles.cInpCity}>
              <TextInput
                placeholderTextColor="black"
                placeholder="City"
                style={styles.txtInp}></TextInput>
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: Colors.blueBack, marginTop: 5}}>
          <View style={styles.cL5}>
            <View style={styles.cInpState}>
              <TextInput
                placeholderTextColor="black"
                placeholder="State"
                style={styles.txtInp}></TextInput>
            </View>
            <View style={styles.cInpDate1}>
              <TextInput
                placeholderTextColor="black"
                placeholder="Date"
                style={styles.txtInp}></TextInput>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctxtInpL1: {
    flex: 1,
    backgroundColor: Colors.blueBack,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  c1: {flex: 1.3, backgroundColor: Colors.blueBack, marginTop: 10},
  cInp: {
    width: '40%',
    height: '100%',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  txtInp: {
    paddingHorizontal: 10,
    flex: 1,
    fontSize: normalize(7),
  },
  cL2: {
    flex: 1,
    backgroundColor: Colors.blueBack,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cInpFirstName: {
    width: '49%',
    height: '100%',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  cInpLastName: {
    width: '50%',
    height: '100%',
    marginLeft: '1%',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  cInpAddress: {
    width: '40%',
    height: '100%',
    marginLeft: 5,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  txtBirthDay: {
    fontSize: 13,
    color: 'black',
    marginVertical: 3,
    marginLeft: '10%',
  },
  cL3: {
    flex: 1,
    backgroundColor: Colors.blueBack,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cInpMonth: {
    width: '40%',
    height: '100%',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  cInpDate: {
    width: '40%',
    height: '100%',
    marginLeft: 5,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  cL4: {
    flex: 1,
    backgroundColor: Colors.blueBack,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cInpAddress: {
    width: '40%',
    height: '100%',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  cInpCity: {
    width: '40%',
    height: '100%',
    marginLeft: 5,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  cL5: {
    flex: 1,
    backgroundColor: Colors.blueBack,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cInpState: {
    width: '40%',
    height: '100%',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  cInpDate1: {
    width: '40%',
    height: '100%',
    marginLeft: 5,
    borderRadius: 2,
    backgroundColor: 'white',
  },
});
