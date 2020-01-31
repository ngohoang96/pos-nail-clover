import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import { items } from '../../../../Components/InitScreen/mockData';

import themes from '../../../../config/themes';
import Item from './itemGrid';
import { Logg } from '../../../../utils';
import { Colors } from '../../../../themes';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haizz: '',
    };
  }
  shouldComponentUpdate({
    catnameFullMenu: catnameFullMenu,
    listServicesFullMenu: newList,
  }) {
    return (
      catnameFullMenu != this.props.catnameFullMenu ||
      newList != this.props.listServicesFullMenu
    );
  }
  // componentDidUpdate(prevProps) {
  //     if (prevProps.listServicesFullMenu !== this.props.listServicesFullMenu) {
  //         Logg.info('___thay đổi rồ mà huhu ____', this.state.haizz)
  //     }
  // }

  render() {
    const { listServicesFullMenu, catnameFullMenu } = this.props;
    let list = listServicesFullMenu;
    list = list.filter(e => e.catname === catnameFullMenu && e.id != -1);
    return (
      <View test style={styles.container}>
        {list.map((item, index) => {
          return <Item
            item={item}
            index={index}
            onPress={() => {
              this.props.updateItemLisFullMenu(item);
            }}
          />
        })}
        {/* <View style={styles.tmp} /> */}

        {/* <FlatList
          // style={styles.containerListRightContent}
          data={list}
          renderItem={({item, index}) => (
            <Item
              item={item}
              index={index}
              onPress={() => {
                this.props.updateItemLisFullMenu(item);
              }}
            />
          )}
          keyExtractor={item => item.id + item.catname + ' '}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tmp: { height: themes.height / 20 },
  containerListRightContent: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
  },
});
