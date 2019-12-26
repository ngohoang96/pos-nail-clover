import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TextCmp, Metrics} from '../../../../../../../themes';
import {normalize} from '../../../../../../../themes/FontSize';
import ModalDropdown from 'react-native-modal-dropdown';

const OPTIONS_1 = ['YES', 'NO'];
export default class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TextCmp
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: normalize(5),
              marginBottom: 5,
            }}>
            Do you have a Appoiment?
          </TextCmp>

          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              // paddingVertical: 5,
              height: '50%',
            }}>
            <ModalDropdown
              defaultValue={OPTIONS_1[0]}
              dropdownTextHighlightStyle={{color: 'red'}}
              showsVerticalScrollIndicator={false}
              animated={true}
              textStyle={{fontSize: normalize(4), marginLeft: 5}}
              dropdownStyle={{
                width: Metrics.appWidth * (3 / 5 - 3 / 50),
                height: OPTIONS_1.length * 40,
                marginTop: 12,
              }}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
              onSelect={(idx, value) => this.props.onSelect(idx, value)}
              dropdownTextStyle={{fontSize: normalize(5)}}
              options={OPTIONS_1}
              renderRow={item => {
                return (
                  <View
                    style={{
                      height: 40,
                      justifyContent: 'center',
                    }}>
                    <TextCmp style={{fontSize: normalize(4), paddingLeft: 5}}>
                      {item}
                    </TextCmp>
                  </View>
                );
              }}
            />
          
          </View>
        </View>
       
      </View>
    );
  }
}