import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {connect} from 'react-redux';

import {selectors, actions} from '../../stores';
import themes from '../../config/themes';
import ItemTech from '../../Components/InitScreen/itemTech';
import {Metrics, Colors} from '../../themes';
import {Logg, ToastLib} from '../../utils';
class TechnicianRepander extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
      posX: null,
      posY: null,
    };
  }
  componentWillMount() {
    this._val = {x: 0, y: 0};
    this.state.pan.addListener(value => (this._val = value));
    this.state.pan.setValue({x: 0, y: 0});
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        if (
          Platform.OS == 'android' &&
          gestureState.dx < 2 &&
          gestureState.dx > -2 &&
          gestureState.dy < 2 &&
          gestureState.dy > -2
        ) {
          return false;
        }
        return true;
      },
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ]),

      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.props.updateDropZone();
        }
        Animated.spring(this.state.pan, {
          toValue: {x: 0, y: 0},
          friction: 5,
        }).start();
      },
    });
  }
  // shouldComponentUpdate({dataService : newDataService}){
  //   return newDataService !== this.props.dataService
  // }

  isDropZone(gesture) {
    var dz = this.props.nailTechDropZone;

    if (
      gesture.moveY > (themes.height * 0.5) / 10 &&
      gesture.moveY < ((themes.height * 4.5) / 10) * 0.45
    ) {
      return true;
    }
    return false;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: true,
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
    };
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.container, {...this.props.style}]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: (Metrics.appWidth * 1.2) / 8.4,
    height:
      ((Metrics.appWidth * 1.2) / 8.4) * 0.35 +
      ((Metrics.appWidth * 1.2) / 8.4) * 0.15,
  },
});
const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianRepander);
