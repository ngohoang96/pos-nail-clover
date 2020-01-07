import { Types } from './actions'
import { Logg, Helper } from '../../utils'

import _ from 'lodash'

const initialState = {
    listService: [],
    catnameActive: 'Additional Options'
}
const reducer = Helper.createReducer(initialState, {
    [Types.ASSIGN_LIST_SERVICE]: ({ state, action }) => {

        let data = _.clone(action.payload);
        Logg.info('___loggdata', data)
        return {
            ...state,
            listService: data
        }

    },
    [Types.UPDATE_CATNAME_SERIVICE]: ({ state, action }) => {
        return {
            ...state,
            catnameActive: action.payload
        }
    },
    [Types.UPDATE_ISSUCCESS_ITEM_SERVICE]: ({ state, action }) => {
        // let data = _.clone(state.listService);
        // let index = data.findIndex(e => e.id === action.payload.id && e.catname === action.payload.catname);
        // data[index].isSelected = !data[index].isSelected
        return {
            ...state,
            // listService: data
        };
    }
})
export default reducer