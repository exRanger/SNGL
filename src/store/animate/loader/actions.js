import {SHOW_LOADER, HIDE_LOADER} from './types'

export const showLoader = (payload) => {
     
    return {
        type: SHOW_LOADER,
        payload: payload
    }
}

export const hideLoader = (payload) => {
    return {
        type: HIDE_LOADER,
        payload: payload
    }
}