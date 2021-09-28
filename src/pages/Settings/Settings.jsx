import React from 'react'
import {useSelector} from 'react-redux'
import { Animator } from '../../components'
import {Loader} from '../../components/Loader'
export const Settings = () => {
    
    const {loading} = useSelector(state => state.loaderReducer)
    
    if(loading){
        return <Loader/>       
    }
    return (
        <Animator>
                 <div className="settings">
            <div className="row">
                <div className="block block-left"></div>
                <div className="block block-left"></div>
                <div className="block block-right"></div>
                
            </div>
            <div className="row">
                <div className="block block-left"></div>
                <div className="block block-right"></div>
            </div>
        </div>
        </Animator>
    )
}
