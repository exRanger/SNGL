import React from 'react'
import { Loader } from '../../components'
import {useSelector} from 'react-redux'
import './About.css'
export const About = () => {
    const {loading}= useSelector(state => state.loaderReducer)
    if(loading){
        return <Loader/>
    }
    return (
        <div className="about">About Page</div>
    )
}