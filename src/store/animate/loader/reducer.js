import {SHOW_LOADER, HIDE_LOADER} from './types'

const initialState = {
    loading: false
}

export const loaderReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_LOADER: return {...state, loading: action.payload}
        case HIDE_LOADER: return {...state, loading: action.payload}
        default: return state
    }
}