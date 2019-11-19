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
import ItemTech from '../../Components/InitScreen/itemTech'
export default class TechnicianRepander extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
      posX : null , 
      posY : null
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ] , ()=>{console.log(this.state.pan.x)}),
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
    console.log('ok ' + dz) 
    console.log("gesture " + gesture.moveY +"   "+ gesture.moveX)
    // this.setState({
    //     posX : gesture.moveX , 
    //     posY : gesture.moveY
    // })
    if(gesture.moveX < themes.width*.9/3.9/2){
        alert('posX ' + gesture.moveX + "  " + 'ok ' + this.props.name)
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
      <View style={styles.mainContainer}>
        <View
          onLayout={this.setDropZoneValues.bind(this)}>
        </View>

        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    if (this.state.showDraggable) {
      return (
        <View
          style={{
            // position: 'absolute',
            width: (((themes.width * 3) / 3.9) * 0.8) / 3.9,
            zIndex : 100,
            height: ((((themes.width * 3) / 3.9) * 0.8) / 3.9) * 0.75, 
            marginTop : 10,
          }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              this.state.pan.getLayout(),
              {
                backgroundColor: '#1abc9c',
                width: '100%',
                height:  '100%',
                position: 'absolute',
                zIndex : 100 
              },
            ]}>
                <ItemTech nameTechnician = {this.props.name}></ItemTech>
          </Animated.View>
        </View>
      );
    }
  }
}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dropZone: {
    backgroundColor: 'red',
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
  },
  draggableContainer: {
    position: 'absolute',
    top: Window.height / 2 - CIRCLE_RADIUS,
    left: Window.width / 2 - CIRCLE_RADIUS,
  },
  circle: {
    backgroundColor: '#1abc9c',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
});
