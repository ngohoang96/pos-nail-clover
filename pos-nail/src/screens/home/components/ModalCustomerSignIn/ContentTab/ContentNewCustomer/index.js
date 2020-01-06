import { connect } from 'react-redux'
import { actions, selectors } from '../../../../../../stores'
import ContentNewCustomerScreen from './ContentNewCustomerScreen'
import { AppCheckIn_CustomerSignUp, AppCheckIn_CustomerSignIn } from '../../../../actions'
import { Logg } from '../../../../../../utils'
import { Alert } from 'react-native'
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {

  const AppCheckInSignUp = (params) => {
    dispatch(AppCheckIn_CustomerSignUp(params)).then((res) => {
      if (res.dataArray && res.dataArray[1].ErrorMessege) {
        Alert.alert('', res.dataArray[1].ErrorMessege)
      } else {
        if (res.dataArray && res.dataArray[0].Status) {
          Alert.alert('', res.dataArray[0].Status)
        } else {
          Alert.alert('', JSON.stringify(res))
        }
      }
      // if (res.dataArray[0].Status === 'Success') {
      //   Alert.alert(res.dataArray[1].ErrorMessege)
      // }

      console.log('' + JSON.stringify(res))
    }).catch(e => Logg.info(e))
  }
  return {
    AppCheckInSignUp
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(ContentNewCustomerScreen)
