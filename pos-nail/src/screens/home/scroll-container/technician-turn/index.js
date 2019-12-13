import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Animated,
  Easing,
  PanResponder,
} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import TextCmp from '../../../../themes/TextCmp';
import TechnicianRepander from '../../../../Components/InitScreen/TechnicianRepander';
import {dataTechnician} from '../../../../Components/InitScreen/mockData';
import ItemTech from '../../../../Components/InitScreen/itemTech';
// import Draggable from 'react-native-draggable';
export default class PaymentCoupon extends Component {
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
      <View style={styles.fx09}>
        <View style={styles.container}>
          <TextCmp style={styles.txtCenter}>Technician Turn</TextCmp>
        </View> 

        <FlatList
          data={[1, 2, 3, 4, 5, 2, 3, 4, 5]}
          renderItem={() => {
            return <TechnicianRepander name={'item.name'}></TechnicianRepander>;
          }}
          style={{flex: 1, backgroundColor: '#fff'}}
        />
        {/*

           <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'red',
            zIndex: 10000,
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
            ]}></Animated.View>
        </View>
        <View style={{width: '100%', height: 100, backgroundColor: 'pink'}}>
          <View onLayout={this.setDropZoneValues.bind(this)}></View>
          <Animated.View   {...this.panResponder.panHandlers}
          style={[
            this.state.pan.getLayout(),
            {
              backgroundColor: 'red',
              width: '100%',
              height: '100%',
            },
          ]}></Animated.View>
        </View>
           <TouchableOpacity
          onLongPress={() => {}}
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'green',
          }}></TouchableOpacity>
       
           <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return <TechnicianRepander name={'item.name'}></TechnicianRepander>;
          }}
          style={{flex: 1, backgroundColor: '#fff'}}
        />

          <ScrollView style={{flex: 1, backgroundColor: 'green',marginTop : 10}}>
          <Draggable
            renderSize={56}
            renderColor="black"
            renderText="A"
            shouldReverse
            onShortPressRelease={() => alert('touched!!')}
            children={<View style = {{width : 100 , height : 100 , backgroundColor : "yellow"}}></View>}
          />
        </ScrollView>
           <ScrollView style={{backgroundColor: 'green'}}>
          <Draggable
            renderSize={56}
            renderColor="black"
            renderText="A"
            isCircle
            shouldReverse
            onShortPressRelease={() => alert('touched!!')}
          />
        </ScrollView>
          
          
          <ScrollView style={styles.fx1}>
          {dataTechnician.map(item => {
            <Draggable>
              <ItemTech name={item.name}></ItemTech>
            </Draggable>;
            // return <TechnicianRepander name={item.name}></TechnicianRepander>;
          })}
        </ScrollView>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: themes.height / 20,
    width: '100%',
    padding: 3,
    justifyContent: 'center',
  },
  fx09: {
    // flex: 0.9,
    flex: 1,
    overflow: 'scroll',
    backgroundColor: 'white',
  },
  txtCenter: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(5),
  },
  fx1: {flex: 1, backgroundColor: 'white'},
  tmp: {height: themes.height / 20},
});
