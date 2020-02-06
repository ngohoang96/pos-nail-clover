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
import {Metrics} from '../../themes';
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
          this.props.update(this.props.name);
        }
        Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start();
      },
    });
  }
  // shouldComponentUpdate({dataService : newDataService}){
  //   return newDataService !== this.props.dataService
  // }

  selectTechnician = () => {
    if (this.props.listTechnicianSelected.length > 0) {
      ToastLib.show('Please select services!');
    } else {
      this.props.update(this.props.name);
    }
  };
  isDropZone(gesture) {
    var dz = this.props.nailTechDropZone;

    if (
      gesture.moveY > (themes.height * 0.5) / 10 &&
      gesture.moveY < ((themes.height * 4.5) / 10) * 0.45
    ) {
      return true;
    }
    if (
      gesture.moveY > ((themes.height * 4.5) / 10) * 0.5 &&
      gesture.moveY < (themes.height * 4.5) / 10
    ) {
      // alert(2);
    }
    return false;

    // return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
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
          width: (Metrics.appWidth * 1.2) / 8.4,
          height:
            ((Metrics.appWidth * 1.2) / 8.4) * 0.35 +
            ((Metrics.appWidth * 1.2) / 8.4) * 0.15,
          backgroundColor: 'white',
        }}
        onLayout={this.setDropZoneValues.bind(this)}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            this.state.pan.getLayout(),
            {
              width: (Metrics.appWidth * 1.2) / 8.4,
              height:
                ((Metrics.appWidth * 1.2) / 8.4) * 0.35 +
                ((Metrics.appWidth * 1.2) / 8.4) * 0.15,
            },
          ]}>
          <TouchableOpacity onPress={() => this.selectTechnician()}>
            <ItemTech nameTechnician={this.props.name} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  const update = name => {
    let id = new Date().getTime();
    let data = {id, name};
    dispatch(actions.home.updateListTechnicianSelected(data));
  };
  return {update};
};

const mapStateToProps = state => ({
  dataService: selectors.home.getDataService(state),
  listTechnicianSelected: selectors.home.selectListTechnicianSelected(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianRepander);
