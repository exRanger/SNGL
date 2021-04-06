import {combineReducers} from "redux"
import {profileReducer} from './profile'
import {loaderReducer} from './animate/loader'
export const reducers = combineReducers({
    profileReducer,
    loaderReducer
})