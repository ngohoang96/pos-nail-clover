import { connect } from 'react-redux'
import ModalEmployeesSignInScreen from './ModalEmployeesSignInScreen'
import { Alert } from 'react-native'
import { actions, selectors } from '../../../../stores'
import {
    AppCheckIn_EmployeeCheckOut, AppCheckIn_EmployeeCheckIn,
    AppCheckIn_TechnicianCloseOut
} from '../../actions'
import { Logg } from '../../../../utils'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => {

    const AppCheckInEmployeeCheckIn = params => {
        dispatch(AppCheckIn_EmployeeCheckIn(params))
            .then((res) => {
                if (res.dataArray && res.dataArray[1].ErrorMessege) {
                    Alert.alert('', res.dataArray[1].ErrorMessege)
                } else {
                    if (res.dataArray && res.dataArray[0].Status) {
                        Alert.alert('', res.dataArray[0].Status)
                    } else {
                        Alert.alert('', JSON.stringify(res))
                    }
                }
                console.log('' + JSON.stringify(res))
            })
            .catch(e => Logg.info(e))

    }


    const AppCheckInEmployeeCheckOut = params => {
        dispatch(AppCheckIn_EmployeeCheckOut(params))
            .then((res) => {
                if (res.dataArray && res.dataArray[1].ErrorMessege) {
                    Alert.alert('', res.dataArray[1].ErrorMessege)
                } else {
                    if (res.dataArray && res.dataArray[0].Status) {
                        Alert.alert('', res.dataArray[0].Status)
                    } else {
                        Alert.alert('', JSON.stringify(res))
                    }
                }
            })
            .catch(e => Logg.info(e))

    }

    const AppCheckInEmployeeCloseOut = params => {
        dispatch(AppCheckIn_TechnicianCloseOut(params)).
            then((res) => {
                if (res.dataArray && res.dataArray[1].ErrorMessege) {
                    Alert.alert('', res.dataArray[1].ErrorMessege)
                } else {
                    if (res.dataArray && res.dataArray[0].Status) {
                        Alert.alert('', res.dataArray[0].Status)
                    } else {
                        Alert.alert('', JSON.stringify(res))
                    }
                }
            })
            .catch(e => Logg.info(e))
    }
    return {
        AppCheckInEmployeeCheckIn,
        AppCheckInEmployeeCheckOut,
        AppCheckInEmployeeCloseOut
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ModalEmployeesSignInScreen)
