import React, {Component} from 'react';
import {
  Animated,
  ScrollView,
  Dimensions,
  Easing,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const PropTypes = require('prop-types');
const {width} = Dimensions.get('window');

const defaultZIndex = 8;
const touchZIndex = 99;

export default class DragSortableView extends Component {
  constructor(props) {
    super(props);

    this.sortRefs = new Map();

    this.itemWidth =
      props.childrenWidth +
      props.marginChildrenLeft +
      props.marginChildrenRight;
    this.itemHeight =
      props.childrenHeight +
      props.marginChildrenTop +
      props.marginChildrenBottom;

    this.reComplexDataSource(true, props);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        this.isMovePanResponder = false;
        return false;
      },
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        this.isMovePanResponder,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        this.isMovePanResponder,
      onPanResponderMove: (evt, gestureState) =>
        this.moveTouch(evt, gestureState),
      onPanResponderRelease: (evt, gestureState) => this.endTouch(evt),
    });
  }

  startTouch(touchIndex) {
    this.isHasMove = false;
    if (this.sortRefs.has(touchIndex)) {
      if (this.props.onDragStart) {
        this.props.onDragStart(touchIndex);
      }
      Animated.timing(this.state.dataSource[touchIndex].scaleValue, {
        toValue: this.props.maxScale,
        duration: this.props.scaleDuration,
      }).start(() => {
        this.touchCurItem = {
          ref: this.sortRefs.get(touchIndex),
          index: touchIndex,
          originLeft: this.state.dataSource[touchIndex].originLeft,
          originTop: this.state.dataSource[touchIndex].originTop,
          moveToIndex: touchIndex,
        };
        this.isMovePanResponder = true;
      });
    }
  }

  moveTouch(nativeEvent, gestureState) {
    this.isHasMove = true;

    if (this.touchCurItem) {
      let dx = gestureState.dx;
      let dy = gestureState.dy;
      console.log('gestureState ' + gestureState.dx + gestureState.dy);

      let left = this.touchCurItem.originLeft + dx;
      let top = this.touchCurItem.originTop + dy;

      this.touchCurItem.ref.setNativeProps({
        style: {
          zIndex: 100000,
        },
      });

      this.state.dataSource[this.touchCurItem.index].position.setValue({
        x: left,
        y: top,
      });

      if (this.props.onDragging) {
        this.props.onDragging(gestureState, left, top);
      }
    }
  }

  endTouch(nativeEvent) {
    //clear
    if (this.touchCurItem) {
      if (this.props.onDragEnd) {
        this.props.onDragEnd(
          this.touchCurItem.index,
          this.touchCurItem.moveToIndex,
        );
      }
      Animated.timing(
        this.state.dataSource[this.touchCurItem.index].scaleValue,
        {
          toValue: 1,
          duration: this.props.scaleDuration,
        },
      ).start();
      this.touchCurItem.ref.setNativeProps({
        style: {
          zIndex: defaultZIndex,
        },
      });
      //trở về vị trí ban đầu
      this.changePosition(
        this.touchCurItem.index,
        this.touchCurItem.moveToIndex,
      );
      this.touchCurItem = null;
    }
  }

  changePosition(startIndex, endIndex) {
    if (startIndex == endIndex) {
      const curItem = this.state.dataSource[startIndex];
      this.state.dataSource[startIndex].position.setValue({
        x: parseInt(curItem.originLeft + 0.5),
        y: parseInt(curItem.originTop + 0.5),
      });
      return;
    }

    let isCommon = true;
    if (startIndex > endIndex) {
      isCommon = false;
      let tempIndex = startIndex;
      startIndex = endIndex;
      endIndex = tempIndex;
    }

    const newDataSource = [...this.state.dataSource].map((item, index) => {
      let newIndex = null;
      if (isCommon) {
        if (endIndex > index && index >= startIndex) {
          newIndex = index + 1;
        } else if (endIndex == index) {
          newIndex = startIndex;
        }
      } else {
        if (endIndex >= index && index > startIndex) {
          newIndex = index - 1;
        } else if (startIndex == index) {
          newIndex = endIndex;
        }
      }

      if (newIndex != null) {
        const newItem = {...this.state.dataSource[newIndex]};
        newItem.originLeft = item.originLeft;
        newItem.originTop = item.originTop;
        newItem.position = new Animated.ValueXY({
          x: parseInt(item.originLeft + 0.5),
          y: parseInt(item.originTop + 0.5),
        });
        item = newItem;
      }

      return item;
    });

    this.setState(
      {
        dataSource: newDataSource,
      },
      () => {
        // Prevent RN from drawing the beginning and end
        const startItem = this.state.dataSource[startIndex];
        this.state.dataSource[startIndex].position.setValue({
          x: parseInt(startItem.originLeft + 0.5),
          y: parseInt(startItem.originTop + 0.5),
        });
        const endItem = this.state.dataSource[endIndex];
        this.state.dataSource[endIndex].position.setValue({
          x: parseInt(endItem.originLeft + 0.5),
          y: parseInt(endItem.originTop + 0.5),
        });
      },
    );
  }

  reComplexDataSource(isInit, props) {
    const rowNum = parseInt(props.parentWidth / this.itemWidth);
    const dataSource = props.dataSource.map((item, index) => {
      const newData = {};
      const left = (index % rowNum) * this.itemWidth;
      const top = parseInt(index / rowNum) * this.itemHeight;

      newData.data = item;
      newData.originIndex = index;
      newData.originLeft = left;
      newData.originTop = top;
      newData.position = new Animated.ValueXY({
        x: parseInt(left + 0.5),
        y: parseInt(top + 0.5),
      });
      newData.scaleValue = new Animated.Value(1);
      return newData;
    });

    if (isInit) {
      this.state = {
        dataSource: dataSource,
        height: Math.ceil(dataSource.length / rowNum) * this.itemHeight,
      };
    } else {
      this.setState({
        dataSource: dataSource,
        height: Math.ceil(dataSource.length / rowNum) * this.itemHeight,
      });
    }
  }

  render() {
    return this._renderItemView();
  }

  _renderItemView = () => {
    return this.state.dataSource.map((item, index) => {
      const key = this.props.keyExtractor
        ? this.props.keyExtractor(item.data, index)
        : item.originIndex;
      return (
        <Animated.View
          key={key}
          ref={ref => this.sortRefs.set(index, ref)}
          {...this._panResponder.panHandlers}
          style={[
            styles.item,
            {
              // marginTop: this.props.marginChildrenTop,
              // marginBottom: this.props.marginChildrenBottom,
              // marginLeft: this.props.marginChildrenLeft,
              // marginRight: this.props.marginChildrenRight,
              left: item.position.x,
              top: item.position.y,
              opacity: item.scaleValue.interpolate({
                inputRange: [1, this.props.maxScale],
                outputRange: [1, this.props.minOpacity],
              }),
              width: '100%',
            },
          ]}>
          <TouchableOpacity
            activeOpacity={0.9}
            delayLongPress={this.props.delayLongPress}
            onLongPress={() => this.startTouch(index)}
            onPress={() => {
              alert('onLongPress');
            }}>
            {this.props.renderItem(item.data, index)}
          </TouchableOpacity>
        </Animated.View>
      );
    });
  };
}

DragSortableView.propTypes = {
  dataSource: PropTypes.array.isRequired,
  parentWidth: PropTypes.number,
  childrenHeight: PropTypes.number.isRequired,
  childrenWidth: PropTypes.number.isRequired,
  marginChildrenTop: PropTypes.number,
  marginChildrenBottom: PropTypes.number,
  marginChildrenLeft: PropTypes.number,
  marginChildrenRight: PropTypes.number,
  onClickItem: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  scaleStatus: PropTypes.oneOf(['scale', 'scaleX', 'scaleY']),
  fixedItems: PropTypes.array,
  keyExtractor: PropTypes.func,
  delayLongPress: PropTypes.number,
  isDragFreely: PropTypes.bool,
  onDragging: PropTypes.func,
  maxScale: PropTypes.number,
  minOpacity: PropTypes.number,
  scaleDuration: PropTypes.number,
  slideDuration: PropTypes.number,
};

DragSortableView.defaultProps = {
  marginChildrenTop: 0,
  marginChildrenBottom: 0,
  marginChildrenLeft: 0,
  marginChildrenRight: 0,
  parentWidth: width,
  scaleStatus: 'scale',
  fixedItems: [],
  isDragFreely: false,
  maxScale: 1.1,
  minOpacity: 0.8,
  scaleDuration: 100,
  slideDuration: 300,
  delayLongPress: 0.5,
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    position: 'absolute',
    zIndex: defaultZIndex,
  },
});
