import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TextCmp} from '../../../../../../themes';
import {normalize} from '../../../../../../themes/FontSize';

import {Dropdown} from 'react-native-material-dropdown';
let dataMonth = [
  {value: '1'},
  {value: '2'},
  {value: '3'},
  {value: '4'},
  {value: '5'},
  {value: '6'},
  {value: '7'},
  {value: '8'},
  {value: '9'},
  {value: '10'},
  {value: '11'},
  {value: '12'},
];
let dataDay = [
  {value: '1'},
  {value: '2'},
  {value: '3'},
  {value: '4'},
  {value: '5'},
  {value: '6'},
  {value: '7'},
  {value: '8'},
  {value: '9'},
  {value: '10'},
  {value: '11'},
  {value: '12'},
  {value: '13'},
  {value: '14'},
  {value: '15'},
  {value: '16'},
  {value: '17'},
  {value: '18'},
  {value: '19'},
  {value: '20'},
  {value: '21'},
  {value: '22'},
  {value: '23'},
  {value: '24'},
  {value: '25'},
  {value: '25'},
  {value: '26'},
  {value: '27'},
  {value: '28'},
  {value: '29'},
  {value: '30'},
  {value: '31'},
];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectMonth: '',
      selectDay: '',
    };
  }
  componentDidMount() {
    // console.log('Technician Bon ' + JSON.stringify(this.state.dataStaffs));
  }
  render() {
    const {selectDay, selectMonth} = this.state;

    return (
      <View
        style={{
          flex: 2.9,
          backgroundColor: '#408EBA',
          paddingVertical: 10,
          paddingHorizontal: 30,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
              Phone(*)
            </TextCmp>
            <TextInput
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: 'white',
                marginTop: 5,
              }}
            />
          </View>
          <View style={{flex: 1, marginLeft: 30, justifyContent: 'flex-end'}}>
            <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
              Refferal Code
            </TextCmp>
            <TextInput
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: 'white',
                marginTop: 5,
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
                First Name(*)
              </TextCmp>
              <TextInput
                style={{
                  width: '100%',
                  height: '50%',
                  backgroundColor: 'white',
                  marginTop: 5,
                }}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end', marginLeft: 10}}>
              <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
                Last Name(*)
              </TextCmp>
              <TextInput
                style={{
                  width: '100%',
                  height: '50%',
                  backgroundColor: 'white',
                  marginTop: 5,
                }}
              />
            </View>
          </View>
          <View style={{flex: 1, marginLeft: 30, justifyContent: 'flex-end'}}>
            <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
              Mail Address(*)
            </TextCmp>
            <TextInput
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: 'white',
                marginTop: 5,
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
                Birth Day
              </TextCmp>
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  backgroundColor: 'white',
                  marginTop: 5,
                  paddingBottom: 10,
                }}>
                <Dropdown
                  containerStyle={{
                    justifyContent: 'center',
                    // backgroundColor: 'pink',
                    paddingLeft: 5,
                    flex: 1,
                  }}
                  value={selectMonth}
                  onChangeText={(value, index) => {
                    this.setState({
                      selectMonth: value,
                    });
                    // alert(selectMonth);
                  }}
                  // overlayStyle = {{backgroundColor : "red"}}
                  label="Select month"
                  // pickerStyle={{backgroundColor: 'yellow'}}
                  itemTextStyle={{alignContent: 'center'}}
                  data={dataMonth}
                />
              </View>
              {/*     <TextInput
                style={{
                  width: '100%',
                  height: '50%',
                  backgroundColor: 'white',
                  marginTop: 5,
                }}
              />*/}
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end', marginLeft: 10}}>
              <TextCmp
                style={{fontSize: normalize(5), color: 'white'}}></TextCmp>
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  backgroundColor: 'white',
                  marginTop: 5,
                  paddingBottom: 10,
                }}>
                <Dropdown
                  containerStyle={{
                    justifyContent: 'center',
                    // backgroundColor: 'pink',
                    paddingLeft: 5,
                    flex: 1,
                  }}
                  // animationDuration = {100}
                  onChangeText={(value, index) => {
                    this.setState({
                      selectDay: value,
                    });
                    // alert(selectMonth);
                  }}
                  value={selectDay}
                  // overlayStyle = {{backgroundColor : "red"}}
                  label="Select day"
                  // pickerStyle={{backgroundColor: 'yellow'}}
                  itemTextStyle={{alignContent: 'center'}}
                  data={dataDay}
                />
              </View>
            </View>
          </View>
          <View style={{flex: 1, marginLeft: 30, justifyContent: 'flex-end'}}>
            <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
              Address
            </TextCmp>
            <TextInput
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: 'white',
                marginTop: 5,
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
              State
            </TextCmp>
            <TextInput
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: 'white',
                marginTop: 5,
              }}
            />
          </View>
          <View style={{flex: 1, marginLeft: 30, justifyContent: 'flex-end'}}>
            <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
              City
            </TextCmp>
            <TextInput
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: 'white',
                marginTop: 5,
              }}
            />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TextCmp style={{fontSize: normalize(5), color: 'white'}}>
              Zipcode
            </TextCmp>
            <TextInput
              style={{
                width: '100%',
                height: '50%',
                backgroundColor: 'white',
                marginTop: 5,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 30,
              justifyContent: 'flex-end',
            }}></View>
        </View>
      </View>
    );
  }
}
