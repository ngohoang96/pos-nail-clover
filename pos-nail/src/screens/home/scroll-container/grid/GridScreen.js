import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {items} from '../../../../Components/InitScreen/mockData';

import themes from '../../../../config/themes';
import {Logg} from '../../../../utils';
import {Colors} from '../../../../themes';
import GridItem from './GridItem';
export default class GridScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  updateSelectedService = item => {
    let data = {service: item.name, amount: item.price + ''};
    this.props.updateSelectedService(data);
  };

  renderItem = ({item, index}) => {
    return (
      <GridItem
        key={index}
        item={item}
        index={index}
        onPress={() => {
          this.updateSelectedService(item);
        }}
      />
    );
  };

  render() {
    const {listServicesFullMenu, catnameFullMenu} = this.props;
    let list = listServicesFullMenu;
    list = list.filter(e => e.catname === catnameFullMenu && e.id != -1);
    return (
      <View test style={styles.container}>
        <FlatList
          data={list}
          renderItem={this.renderItem}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: 4,
  },
});
