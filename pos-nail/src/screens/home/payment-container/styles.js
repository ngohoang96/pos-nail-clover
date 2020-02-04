import {StyleSheet} from 'react-native';
import {normalize} from '../../../themes/FontSize';
import {Metrics, Colors} from '../../../themes';
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 25,
    alignItems: 'center',
    width: '100%',
    marginVertical: 3,
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
    fontWeight: 'bold',
  },
  wrapper_cash: {
    borderWidth: 0.5,
    padding: 2,
    borderColor: '#A7A7A7',
    height: 28,
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
    width: '60%',

    height: 30,
  },
  coupon: {
    width: '70%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: 28,
    backgroundColor: Colors.bgGray,
  },
  first_card: {
    width: '70%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: 28,
    backgroundColor: Colors.bgGray,
  },
  second_card: {
    width: '26%',
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#A7A7A7',
    height: 28,
    marginHorizontal: '2%',
    backgroundColor: Colors.bgGray,
    justifyContent: 'center',
  },
  box_discount: {
    width: '50%',
    height: 28,
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
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper_name: {
    backgroundColor: 'red',
    width: '100%',
    height: 30,
    padding: 3,
    margin: 3,
  },
});

export {styles};
