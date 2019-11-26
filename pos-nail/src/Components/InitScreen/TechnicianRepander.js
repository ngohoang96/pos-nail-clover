import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import themes from '../../config/themes';
import ItemTech from '../../Components/InitScreen/itemTech';
export default class TechnicianRepander extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
      posX: null,
      posY: null,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.pan.x,
            dy: this.state.pan.y,
          }
        ]
      ),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start();
        }
      },
    });
  }

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    console.log('ok ' + dz);
    console.log('gesture ' + gesture.moveY + '   ' + gesture.moveX);
    // this.setState({
    //     posX : gesture.moveX ,
    //     posY : gesture.moveY
    // })
    if (gesture.moveX < (themes.width * 0.9) / 3.9 / 2) {
      alert('posX ' + gesture.moveX + '  ' + 'ok ' + this.props.name);
    }
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: true,
    });
  }

  render() {
    return (
      <View
        style={{
          width: (((themes.width * 3) / 3.9) * 0.8) / 3.9,
          height: ((((themes.width * 3) / 3.9) * 0.8) / 3.9) * 0.75,
          marginTop: 10,
        }}>
        <View onLayout={this.setDropZoneValues.bind(this)}></View>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            this.state.pan.getLayout(),
            {
              backgroundColor: '#1abc9c',
              width: '100%',
              height: '100%',
            },
          ]}>
          <ItemTech nameTechnician={this.props.name}></ItemTech>
        </Animated.View>
      </View>
    );
  }
}
