import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import DragSortableView from './DragSortableView';

import {items2} from './Components/InitScreen/mockData';
import Button2 from './Components/InitScreen/Button2';
const {width, height} = Dimensions.get('window');
import ItemTech from './Components/InitScreen/itemTech';

const parentWidth = (((width * 3) / 3.9) * 0.86) / 3.9;
const childrenWidth = (((width * 3) / 3.9) * 0.86) / 3.9;
const childrenHeight = 50;
const deleteHeight = childrenHeight;

export default class DragDeletePage extends Component {
  constructor(props) {
    super();

    this.state = {
      data: items2,
      deleteStatus: 0, // 0: common 1: wait 2. delete
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sort}>
          <DragSortableView
            dataSource={this.props.data}
            parentWidth={parentWidth}
            isDragFreely={true}
            childrenWidth={childrenWidth}
            childrenHeight={childrenHeight}
            onDragging={this.onDragging}
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
           height = {1000}
            keyExtractor={(item, index) => item.txt} 
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }

  onDragStart = () => {
    this.setState({
      deleteStatus: 1,
    });
  };

  onDragEnd = (startIndex, endIndex) => {
    if (this.state.deleteStatus === 2) {
      alert(this.props.data[startIndex].name)
      if (startIndex === endIndex) {
        const newData = [...this.state.data];
        newData.splice(startIndex, 1);
        this.setState({
          data: newData,
          deleteStatus: 0,
        });
      } else {
        this.deleteIndex = endIndex;
        this.setState({
          deleteStatus: 0,
        });
      }
    } else {
      this.setState({
        deleteStatus: 0,
      });
    }
  };

  onDragging = (gestureState, left, top) => {
    if (this.isBuffer) return;
    // alert(gestureState.moveX)
    if (gestureState.moveX <= (Dimensions.get('window').width * 0.8) / 6) {
      this.isBuffer = true;
      this.setState({deleteStatus: 2}, () => {
        this.isBuffer = false;
      });
    } else if (this.state.deleteStatus !== 1) {
      this.isBuffer = true;
      this.setState({deleteStatus: 1}, () => {
        this.isBuffer = false;
      });
    }
  };

  renderItem(item, index) {
    return <ItemTech nameTechnician={item.name}></ItemTech>;
  }
}

const styles = StyleSheet.create({
  container: {},
  sort: {
    flex: 1,
  },
  item: {
    width: childrenWidth,
    height: childrenHeight,
    borderRadius: 2,
  },
  item_children: {
    //margin: 4,
    width: childrenWidth - 4,
    height: childrenHeight - 4,
    backgroundColor: '#957be7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  item_icon: {
    width: childrenHeight / 2,
    height: childrenHeight / 2,
    resizeMode: 'contain',
  },
  item_txt: {
    fontSize: 18,
    color: '#fff',
  },
  delete: {
    width: width,
    height: deleteHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e64e0b',
    zIndex: 9999,
  },
  delete_icon: {
    width: '100%',
    height: '100%',
  },
  delete_txt: {
    fontSize: 16,
    color: '#fff',
  },
});
