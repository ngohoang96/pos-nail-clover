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

// const dataAdd = [{id: '13', name: 'Nguyen Van C'}];
import {selectors, actions} from '../../stores';
import themes from '../../config/themes';
import {normalize} from '../../themes/FontSize';
import TextCmp from '../../themes/TextCmp';
import ItemTech from '../../Components/InitScreen/itemTech';
import ViewOverflow from 'react-native-view-overflow';
// import {SnackBar} from '../../utils';
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
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start();
        }
      },
    });
  }
  // shouldComponentUpdate({dataService : newDataService}){
  //   return newDataService !== this.props.dataService
  // }

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    console.log(
      'gesture ' + gesture.moveX + '   ' + (themes.width * 0.2) / 5.6,
    );
    // this.setState({
    //     posX : gesture.moveX ,
    //     posY : gesture.moveY
    // })

    if (gesture.moveX < (themes.width * 0.2) / 5.6 && gesture.moveX != 0) {
      console.log('add Success  ' + this.props.addSuccess);
      // if (this.props.addSuccess)
      //   SnackBar.showSuccess('Thêm service thành công');

      this.props.update(this.props.id, this.props.name);
      // alert('posX ' + gesture.moveX + '  ' + 'ok ' + this.props.name);
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
          width: (themes.width * 0.9) / 5.6,
          height: ((themes.width * 0.9) / 5.6) * 0.65,
          marginTop: 10,
          backgroundColor: 'white',
        }}
        onLayout={this.setDropZoneValues.bind(this)}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            this.state.pan.getLayout(),
            {
              backgroundColor: '#fff',
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
const mapDispatchToProps = dispatch => {
  const update = (id, name) => {
    let data = [];
    data.push({id, name});
    dispatch(actions.test.updateDataService(data));
  };
  return {update};
};

const mapStateToProps = state => ({
  dataService: selectors.test.getDataService(state),
  // addSuccess: selectors.test.addSuccess(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianRepander);
