import {StyleSheet} from 'react-native';
import {normalize} from '../../../themes/FontSize';
import {Metrics, Colors} from '../../../themes';
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '13%',
    alignItems: 'center',
    width: '100%',
  },
  wrapper_type: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '23%',
  },
  text: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(4),
    fontWeight: 'bold',
  },
  wrapper_cash: {
    borderWidth: 0.5,
    padding: 2,
    borderColor: '#A7A7A7',
    height: '100%',
    minWidth: '15%',
    backgroundColor: Colors.bgGray,
    justifyContent: 'center',
  },
  txt_cash: {
    color: '#383E44',
    textAlign: 'right',
    fontSize: normalize(3.5),
  },
  center_view: {
    width: '59%',

    height: '100%',
  },
  coupon: {
    width: '70%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: '100%',
    backgroundColor: Colors.bgGray,
  },
  first_card: {
    width: '70%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: '100%',
    backgroundColor: Colors.bgGray,
  },
  second_card: {
    width: '26%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: '100%',
    marginHorizontal: '2%',
    backgroundColor: Colors.bgGray,
    justifyContent: 'center',
  },
  box_discount: {
    width: '50%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    justifyContent: 'center',
  },
  txt_fixamount: {
    color: '#383E44',
    textAlign: 'center',
    fontSize: normalize(3.5),
    fontWeight: 'bold',
  },
  box_fixamount: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  wrappername: {
    backgroundColor: '#EEE7AD',
    width: '98%',
    height: '100%',
    padding: 3,
    margin: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn_remove: {
    position: 'absolute',
    top: 0,
    left: '70%',
    right: 0,
    bottom: 0,
    alignItems: 'center',
    height: '100%',
    width: 30,
    justifyContent: 'center',
  },
});

export {styles};
