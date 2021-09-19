import {START_ANIMATE, STOP_ANIMATE} from './actions'

const initialState = {
    isAnimate: false
}

export const animateReducer = (state = initialState, action) => {
    switch(action.type){
        case START_ANIMATE: return {...state, isAnimate: action.payload}
        default: return state
    }
}
