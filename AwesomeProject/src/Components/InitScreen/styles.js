import {StyleSheet} from 'react-native';
import themes from '../../config/themes'
export const styles = StyleSheet.create({
  renderItemGridList: {
    width: "95%",
    height: (themes.height * 1) / 9,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(72, 63, 73)',
    flexDirection: 'row',
  },
  text1: {fontSize: 14, alignItems: 'center', color: '#383E44'},
  viewService: {
    flex: 0.8,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#878787',
    padding: 3,
  },
  textService: {fontSize: 18, alignItems: 'center', color: '#383E44'},
  textPaymentCart: {fontSize: 20, alignItems: 'center', color: '#383E44'},
  bgWhite_flex1: {flex: 1, backgroundColor: 'white'},
  containerView1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  container2: {flexDirection: 'row', justifyContent: 'space-around', flex: 1},
  textIpCoupon: {
    width: "60%",
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    height : '50%'
  },
  text2: {
    fontSize: 14,
    alignItems: 'center',
    color: '#383E44',
    flex: 0.3,
    textAlign: 'right',
  },
  textIpBasic: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    paddingVertical: -5
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
    width: "70%",
    borderWidth: 0.5,
    borderColor: '#BEBEBE',
    padding : 1
  },
  view1: {flex: 1, borderBottomColor: '#99CC00', borderBottomWidth: 1},
});
