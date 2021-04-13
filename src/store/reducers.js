import {combineReducers} from "redux"
import {profileReducer} from './profile'
import {loaderReducer} from './animate/loader'
import {fetchReducer} from './mock'
import {animateReducer} from './animate/afterloader'
export const reducers = combineReducers({
    profileReducer,
    loaderReducer,
    fetchReducer,
    animateReducer,
})