import { PUT_DATA } from "./actions"

const initialState = {
    fetched: []
}

export const fetchReducer = (state = initialState, action)=>{
    switch(action.type){
        case PUT_DATA: return {...state, fetched:  action.payload}
        default: return state
    }
}