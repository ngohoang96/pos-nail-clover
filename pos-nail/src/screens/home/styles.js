import {StyleSheet} from 'react-native';
import themes from '../../config/themes';
import {Metrics, Colors} from '../../themes';
import {normalize} from '../../themes/FontSize';
const styles = StyleSheet.create({
  renderItemGridList: {
    width: '100%',
    height: ((((themes.width * 3) / 3.9) * 1) / 3.8) * 0.3,
    backgroundColor: '#F4F4F4',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingBottom: 100,
    flexDirection: 'row',
  },
  text1: {fontSize: 14, alignItems: 'center', color: '#383E44'},
  viewService: {
    flex: 0.6,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#878787',
    padding: 3,
    justifyContent: 'center',
  },
  textService: {fontSize: 18, alignItems: 'center', color: '#383E44'},
  textPaymentCart: {
    fontSize: 20,
    alignItems: 'center',
    color: '#383E44',
    fontWeight: 'bold',
  },
  bgWhite_flex1: {flex: 0.65, backgroundColor: 'white', overflow: 'hidden'},
  containerView1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 1,
  },
  container2: {flexDirection: 'row', justifyContent: 'space-between', flex: 1},
  textIpCoupon: {
    width: '60%',
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    height: '50%',
  },
  text2: {
    fontSize: 14,
    alignItems: 'center',
    color: '#383E44',
    flex: 0.3,
    textAlign: 'right',
  },
  textIpBasic: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    paddingVertical: -5,
  },
  text3: {
    fontSize: 14,
    alignItems: 'center',
    color: '#383E44',
    flex: 0.25,
    textAlign: 'right',
  },
  textIp1: {
    width: 70,
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    paddingVertical: -3,
    paddingHorizontal: 3,
    marginTop: 5,
  },
  btn1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    padding: 1,
  },
  view1: {flex: 1, borderBottomColor: '#99CC00', borderBottomWidth: 1},
  buttonCancel: {
    width: '30%',
    height: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: normalize(3),
    fontWeight: 'bold',
  },
  wrapper_all: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
  },
  // txt: {
  //   fontSize: 18,
  //   lineHeight: 24,
  //   padding: 5,
  // },
  // sort: {
  //   marginLeft: 18,
  // },
  // item: {
  //   width: childrenWidth,
  //   height: childrenHeight,
  //   backgroundColor: '#f0ffff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 4,
  // },
  // item_icon: {
  //   width: childrenWidth - 4,
  //   height: childrenHeight - 4,
  //   resizeMode: 'contain',
  //   position: 'absolute',
  // },
});

export {styles};
