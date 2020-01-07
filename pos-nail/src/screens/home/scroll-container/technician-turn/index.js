import React, { Component } from 'react';
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
  TouchableHighlight,
  Alert,
} from 'react-native';
import { iconsScroll } from '../../../../assets';
import themes from '../../../../config/themes';
import { normalize } from '../../../../themes/FontSize';

import TechnicianRepander from '../../../../Components/InitScreen/TechnicianRepander';
import { dataTechnician } from '../../../../Components/InitScreen/mockData';
import { ToastLib } from '../../../../utils';
import { TextCmp } from '../../../../themes';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexMap: 0,
      indexMapEnd: 4,
      dataMap: [],
      isAdd: true,
      isReduction: false,
    };
  }
  // _renderMap = (data, index, indexMapEnd, isAdd) => {
  //   if (indexMapEnd - 1 === data.length) {
  //     indexMapEnd = data.length;
  //   }
  //   if (data.length - index > 4) {
  //     data = data.slice(index, indexMapEnd);

  //     // alert('a ' + index + ' b ' + indexMapEnd + JSON.stringify(data));
  //   } else {
  //     data = data.slice(index, indexMapEnd);
  //     // alert('aaa ' + index + ' b ' + indexMapEnd + data);
  //   }

  //   return data.map((item, index) => {
  //     return (
  //       <View
  //         key={index}
  //         style={{
  //           width: (themes.width * 0.9) / 5.6,
  //           height: ((themes.width * 0.9) / 5.6) * 0.65,
  //           marginBottom: 10,
  //         }}>
  //         <TechnicianRepander id={item.id} name={item.name} />
  //       </View>
  //     );
  //   });
  // };

  render() {
    const { indexMap, indexMapEnd, isAdd, isReduction } = this.state;
    return (
      <View style={styles.fx09}>
        <View style={styles.container}>
          <TextCmp style={styles.txtCenter}>Technician Turn</TextCmp>
        </View>
        <ScrollView style={styles.fx1}>
          {dataTechnician.map(item => {
            return (
              <TechnicianRepander
                key={item.id + ''}
                id={item.id}
                name={item.name}></TechnicianRepander>
            );
          })}
        </ScrollView>

        {/*



           <View style={{flex: 1, backgroundColor: '#fff'}}>
          {isReduction ? (
            <View
              style={{
                backgroundColor: '#F5F5F5',
                width: (themes.width * 0.9) / 5.6,
                height: 30,
                opacity: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (indexMap > 0) {
                    this.setState({
                      indexMapEnd: indexMap,
                      indexMap: indexMap - 4,
                    });
                    // alert(indexMap + '   ' + indexMapEnd);
                  }
                  if (dataTechnician.length - indexMapEnd < 0) {
                    this.setState({
                      isAdd: true,
                    });
                  }
                  if (indexMap < 5) {
                    this.setState({
                      isReduction: false,
                    });
                  }
                }}
                style={{
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={iconsScroll.uparrow}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={{flex: 1}}>
            {this._renderMap(dataTechnician, indexMap, indexMapEnd)}
          </View>
          {isAdd ? (
            <View
              style={{
                backgroundColor: '#F5F5F5',
                width: (themes.width * 0.9) / 5.6,
                height: 30,
                opacity: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  if (dataTechnician.length - indexMapEnd > 0) {
                    if (dataTechnician.length - indexMapEnd > 4) {
                      this.setState({
                        indexMapEnd: indexMapEnd + 4,
                        isAdd: true,
                      });
                      // alert('a');
                    } else {
                      this.setState({
                        indexMapEnd: dataTechnician.length + 1,
                        isAdd: false,
                      });
                      // alert('b');
                    }
                    if (indexMapEnd > 3) {
                      this.setState({
                        isReduction: true,
                      });
                    } else {
                      this.setState({
                        isReduction: false,
                      });
                    }
                    this.setState({
                      indexMap: indexMapEnd,
                    });
                  }
                  // alert(
                  //   indexMap +
                  //     ' ' +
                  //     indexMapEnd +
                  //     ' ' +
                  //     isAdd +
                  //     ' ' +
                  //     isReduction +
                  //     dataTechnician.length +
                  //     indexMapEnd,
                  // );
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={iconsScroll.downarrow}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>






          {dataTechnician && (
            <Swiper autoplay={false} horizontal={false}>
              {this._renderBaner()}
            </Swiper>
          )}
           <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={{flex: 1}}>
            {dataTechnician.map(({item , index}) => {
              return (
                <TechnicianRepander
                  id={item.id}
                  name={item.name}></TechnicianRepander>
              );
            })}
          </View>
        </ScrollView>




           <FlatList
          data={dataTechnician}
          renderItem={({item, index}) => {
            return (
              <TechnicianRepander
                id={item.id}
                name={item.name}></TechnicianRepander>
            );
          }}
          style={{flex: 1, backgroundColor: '#fff'}}
        />
                  <GridList
          data={dataTechnician}
          numColumns={1}
          renderItem={this.renderItem}></GridList>
 <FlatList
          data={[1, 2, 3, 4, 5, 2, 3, 4, 5]}
          renderItem={() => {
            return <TechnicianRepander name={'item.name'}></TechnicianRepander>;
          }}
          style={{flex: 1, backgroundColor: '#fff'}}
        />
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
    marginBottom: themes.height / 12,
  },
  txtCenter: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(5),
  },
  fx1: { flex: 1, backgroundColor: 'white' },
  tmp: { height: themes.height / 20 },
});
