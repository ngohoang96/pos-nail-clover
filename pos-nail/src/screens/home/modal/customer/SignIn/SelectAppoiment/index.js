import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {normalize} from '../../../../../../themes/FontSize';
import {TextCmp, Metrics} from '../../../../../../themes';
import {styles} from '../styles';

const OPTIONS_APPOIMENT = ['NO', 'YES'];
export default class SelectAppoiment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onSelect} = this.props;
    return (
      <View style={styles.wrapper_appoiment}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TextCmp style={styles.txt_appoiment}>
            Do you have a Appoiment?
          </TextCmp>
          <View style={styles.wrapper_dropdownappoiment}>
            <ModalDropdown
              defaultValue={OPTIONS_APPOIMENT[0]}
              showsVerticalScrollIndicator={false}
              animated={true}
              textStyle={{
                fontSize: normalize(4),
                marginLeft: 5,
              }}
              dropdownStyle={{
                width: (Metrics.appWidth * 70) / 100 - 20,
                height: OPTIONS_APPOIMENT.length * 40,
                marginTop: 12,
              }}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
              onSelect={(index, value) => {
                onSelect(index);
              }}
              dropdownTextStyle={{fontSize: normalize(5)}}
              options={OPTIONS_APPOIMENT}
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
