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
    Logg.info('aaaaa', this.props);
    const {listserveceSearch} = this.props;
    const {mCatName} = this.state;
    console.log(JSON.stringify(listserveceSearch));
    return (
      <View style={styles.fx05MGH10}>
        {/* <View style={styles.fxD_row}>
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
        </View> */}
        <View style={styles.containerScroll}>
          <ScrollView horizontal={true} style={styles.width100}>
            <View style={{flexDirection: 'row'}}>
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
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fx05MGH10: {
    flex: 1,
    zIndex: -1,
  },
  fxD_row: {
    flexDirection: 'row',

    backgroundColor: '#F0F0F0',
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLabel: {
    height: themes.height / 20,
    justifyContent: 'center',
  },
  txtLabel: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(3),
  },
  containerIconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  containerScroll: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // marginTop: 5,
  },
  width100: {width: '100%'},
  colorBlack: {color: 'black'},
});
