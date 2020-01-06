import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Colors, TextCmp } from '../../../../../themes';
import { normalize } from '../../../../../themes/FontSize';
import ButtonKey from './button.key';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _button = () => {
    return (
      <View style={{ flex: 2, backgroundColor: 'gray', borderRadius: 5 }}></View>
    );
  };
  render() {
    // keyStyle xác đĩnh em có hiện các nút click bên phải hay không 
    const { keyStyle, containerStyles } = this.props
    return (
      <View style={[{ flex: 2.5, backgroundColor: '#367FA9' }, containerStyles]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ButtonKey onPress={() => this.props.onPress1()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="1" />
          <ButtonKey onPress={() => this.props.onPress2()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="2" />
          <ButtonKey onPress={() => this.props.onPress3()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="3" />
          {keyStyle !== 'none' ?
            <ButtonKey
              onPress={() => this.props.onPressClockIn()}
              flex={3}
              backgroundColor="#408EBA"
              borderColor="#397DA4"
              text="Clock In"
              textStyle={{ fontSize: normalize(6) }}
            /> : null
          }

        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ButtonKey onPress={() => this.props.onPress4()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="4" />
          <ButtonKey onPress={() => this.props.onPress5()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="5" />
          <ButtonKey onPress={() => this.props.onPress6()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="6" />

          {keyStyle !== 'none' ?
            <ButtonKey
              onPress={() => this.props.onPressClockOut()}
              flex={3}
              backgroundColor="#408EBA"
              borderColor="#397DA4"
              text="Clock Out"
              textStyle={{ fontSize: normalize(6) }}
            /> : null
          }
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ButtonKey onPress={() => this.props.onPress7()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="7" />
          <ButtonKey onPress={() => this.props.onPress8()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="8" />
          <ButtonKey onPress={() => this.props.onPress9()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="9" />

          {keyStyle !== 'none' ?
            <ButtonKey
              onPress={() => this.props.onPressCloseOut()}
              flex={3}
              backgroundColor="#408EBA"
              borderColor="#397DA4"
              text="Close Out"
              textStyle={{ fontSize: normalize(6) }}
            /> : null
          }
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ButtonKey onPress={() => this.props.onPressC()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="C" />
          <ButtonKey onPress={() => this.props.onPress0()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="0" />
          <ButtonKey onPress={() => this.props.onPressPop()} backgroundColor="#DB4C3F" borderColor="#D53B2D" text="<<" />

          {keyStyle !== 'none' ?
            <ButtonKey
              onPress={() => this.props.onPressCancel()}
              flex={3}
              backgroundColor="#408EBA"
              borderColor="#397DA4"
              text="Cancel"
              textStyle={{ fontSize: normalize(6) }}
            /> : null
          }
        </View>
      </View>
    );
  }
}

export default index;
