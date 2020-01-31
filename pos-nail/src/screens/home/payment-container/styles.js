import {StyleSheet} from 'react-native';
import {normalize} from '../../../themes/FontSize';
import {Metrics} from '../../../themes';
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 25,
    alignItems: 'center',
    width: '100%',
  },
  wrapper_type: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '22%',
  },
  text: {
    alignItems: 'center',
    color: '#383E44',
    fontSize: normalize(4),
    fontWeight: '400',
  },
  wrapper_cash: {
    borderWidth: 0.5,
    padding: 2,
    borderColor: '#A7A7A7',
    height: 22,
    minWidth: '15%',
  },
  txt_cash: {
    color: '#383E44',
    textAlign: 'right',
    fontSize: normalize(3.5),
  },
  center_view: {
    width: '63%',

    height: 25,
  },
  coupon: {
    width: '70%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: 22,
  },
  first_card: {
    width: '70%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: 22,
  },
  second_card: {
    width: '26%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: 22,
    marginHorizontal: '2%',
  },
  box_discount: {
    width: '50%',
    height: 22,
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
  },
  txt_fixamount: {
    color: '#383E44',
    textAlign: 'center',
    fontSize: normalize(3.5),
  },
  box_fixamount: {
    width: '50%',
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
