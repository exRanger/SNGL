import React from 'react'
import {useSelector} from 'react-redux'
import { Loader } from '../../components'
import './Main.css'
export const Main= () => {
    const {loading}= useSelector(state => state.loaderReducer)
    if(loading){
        return  <Loader/>
    }
    return (
        <div className="main">Main Page</div>
    )
}