import React from 'react'
import { Loader, Animator } from '../../components'
import {useSelector} from 'react-redux'
import './About.css'
export const About = () => {

    const {loading}= useSelector(state => state.loaderReducer)
    if(loading){
        return <Loader/>
    }
    return (
        <Animator>
          <div className="about">
                <div className="row">
                    <div className="block block-left"></div>
                    <div className="block block-right"></div>
                </div>
                <div className="row">
                    <div className="block block-left"></div>
                    <div className="block block-right"></div>
                    <div className="block block-right"></div>
                </div>
            </div>
        </Animator>
    )
}