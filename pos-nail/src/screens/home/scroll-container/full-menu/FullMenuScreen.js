import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Logg} from '../../../../utils';
import {TextCmp, Colors} from '../../../../themes';
import FullMenuItem from './FullMenuItem';
import {homeIcon} from '../../../../assets';
export default class PaymentCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mCatName: 'Additional Options',
      scrollEvent: null,
      x: 220,
      isBottom: false,
    };
  }
  componentDidMount() {
    // const { listserveceSearch } = this.props
    // listserveceSearch = listserveceSearch.map(item => (item.isSelected = false))
  }

  _updateScrollEvent = scrollEvent => {
    this.setState({scrollEvent});
  };

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 30
    );
  };

  _scrollToLeft = () => {
    this.scrollView.scrollTo({x: 0, y: 0});
    this.setState({x: 220});
  };

  _scrollToRight = () => {
    let {x, scrollEvent} = this.state;
    if (!scrollEvent) {
      this.scrollView.scrollTo({y: 0, x});
      this.setState({x: x + 220});
    } else {
      if (x < scrollEvent.contentSize.width) {
        this.scrollView.scrollTo({y: 0, x});
        this.setState({x: x + 220});
      }
    }
  };

  render() {
    const {listserveceSearch} = this.props;
    const {mCatName} = this.state;
    return (
      <View style={styles.fx05MGH10}>
        <View style={styles.containerScroll}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={({nativeEvent}) => {
              this.setState({scrollEvent: nativeEvent});
            }}
            onMomentumScrollEnd={event => {
              this.setState({scrollEvent: event.nativeEvent});
            }}
            ref={ref => (this.scrollView = ref)}
            horizontal={true}
            style={styles.scrollview}>
            {listserveceSearch.map((item, index) => {
              if (index != 0) {
                return (
                  <FullMenuItem
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
          <View style={styles.wrapper_scrollbtn}>
            <TouchableOpacity
              style={styles.btn_arrow}
              onPress={() => this._scrollToLeft()}>
              <Image source={homeIcon.left_arrow} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn_arrow}
              onPress={() => this._scrollToRight()}>
              <Image source={homeIcon.right_arrow} style={styles.icon} />
            </TouchableOpacity>
          </View>
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
    width: '100%',
    flexDirection: 'row',
    height: '100%',
    // marginTop: 5,
  },
  scrollview: {width: '100%', flexDirection: 'row'},
  colorBlack: {color: 'black'},
  icon: {
    width: 15,
    height: 15,
  },
  wrapper_scrollbtn: {
    width: 70,
    // height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_arrow: {
    width: 35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgGray,
  },
});
