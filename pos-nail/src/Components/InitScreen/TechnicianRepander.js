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
          this.props.update(this.props.id, this.props.name);
          Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start();
        } else {
          Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start();
        }
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
      this.props.update(this.props.id, this.props.name);
    }
  };
  isDropZone(gesture) {
    var dz = this.props.nailTechDropZone;
    // Logg.info('gesture ' + gesture.moveX);
    // Logg.info('gesture ' + gesture.moveY);
    // // this.setState({
    // //     posX : gesture.moveX ,
    // //     posY : gesture.moveY
    // // })

    // if (gesture.moveX < (themes.width * 0.2) / 5.6 && gesture.moveX != 0) {
    //   console.log('add Success  ' + this.props.addSuccess);
    //   // if (this.props.addSuccess)
    //   //   SnackBar.showSuccess('Thêm service thành công');

    //
    //   // alert('posX ' + gesture.moveX + '  ' + 'ok ' + this.props.name);
    // }
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
              width: '100%',
              height: '100%',
            },
          ]}>
          <ItemTech
            nameTechnician={this.props.name}
            selectTechnician={this.selectTechnician}
          />
        </Animated.View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  const update = (id, name) => {
    let data = {id, name};
    dispatch(actions.test.updateListTechnicianSelected(data));
  };
  return {update};
};

const mapStateToProps = state => ({
  dataService: selectors.test.getDataService(state),
  listTechnicianSelected: selectors.test.selectListTechnicianSelected(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianRepander);
