import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {TextCmp, Colors} from '../../../../../../themes';
import {Logg} from '../../../../../../utils';

export default class ContentServices extends Component {
  shouldComponentUpdate({typeSelected: newTypeSelected}) {
    return newTypeSelected !== this.props.typeSelected;
  }
  _renderItem = (item, index, typeSelected) => {
    const {updateSelectedService} = this.props;

    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.btn,
          {backgroundColor: typeSelected === item.catname ? '#CAE5E8' : '#fff'},
        ]}
        onPress={() => updateSelectedService(item.catname)}>
        <TextCmp>{item.catname}</TextCmp>
      </TouchableOpacity>
    );
  };

  _keyExtractor = (item, index) => index.toString();
  render() {
    const {typeServices, typeSelected} = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={typeServices}
          renderItem={({item, index}) =>
            this._renderItem(item, index, typeSelected)
          }
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    borderRightWidth: 0.5,
  },
  btn: {
    alignSelf: 'stretch',
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: Colors.line,
    margin: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
