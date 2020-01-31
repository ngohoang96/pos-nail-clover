import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ItemScrollView from './itemScrollView';
import {Logg} from '../../../../utils';
import {TextCmp} from '../../../../themes';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mCatName: 'Additional Options',
    };
  }
  componentDidMount() {
    // const { listserveceSearch } = this.props
    // listserveceSearch = listserveceSearch.map(item => (item.isSelected = false))
  }
  render() {
    const {listserveceSearch} = this.props;
    const {mCatName} = this.state;
    console.log(JSON.stringify(listserveceSearch));
    return (
      <View style={styles.fx05MGH10}>
        <View style={styles.fxD_row}>
          <View style={styles.containerLabel}>
            <TextCmp style={styles.txtLabel}>Full Menu</TextCmp>
          </View>
          <View style={styles.containerIconMenu}>
            <IonIcon
              name="ios-menu"
              size={normalize(6)}
              color="black"
              style={{}}></IonIcon>
          </View>
        </View>
        <View style={styles.containerScroll}>
          <ScrollView style={styles.width100}>
            {listserveceSearch.map((item, index) => {
              if (index != 0) {
                return (
                  <ItemScrollView
                    onPress={() => {
                      this.setState({
                        mCatName: item.catname,
                      });
                      this.props.updateListFullMenu(item.catname);
                    }}
                    key={index + ''}
                    item={item}
                    mCatName={mCatName}
                  />
                );
              } else {
                return null;
              }
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fx05MGH10: {
    marginLeft: 3,
    marginRight: 6,
    flex: 0.5,
    // zIndex: -1,
  },
  fxD_row: {
    flexDirection: 'row',
  },
  containerLabel: {
    height: themes.height / 20,

    justifyContent: 'center',
  },
  txtLabel: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(5),
  },
  containerIconMenu: {alignItems: 'center', justifyContent: 'center'},
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // marginTop: 5,
  },
  width100: {width: '100%'},
  colorBlack: {color: 'black'},
});
