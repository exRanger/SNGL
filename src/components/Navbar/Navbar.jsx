import React from 'react'
import './Navbar.css'
import {useHistory} from 'react-router-dom'
import { links } from '../../constants/links'
import { Loader } from '../Loader'
import { hideLoader, showLoader } from '../../store/animate/loader'
import {useDispatch} from 'react-redux'

export const Navbar = ()=>{

    const history = useHistory()
    const dispatch = useDispatch()

    const handleClickLink = (links) => (e) => {
        e.preventDefault()
       
        dispatch(showLoader(true))
        setTimeout(()=> {
            dispatch(hideLoader(false)) 
            history.push(links)
            
        },150)
        
          
            
         
       
        
    } 

    return (
        <div className="navbar">
            <a onClick={handleClickLink(links.main)} href="#">Main</a>
            <a onClick={handleClickLink(links.about)} href="#">About us</a>
            <a onClick={handleClickLink(links.settings)} href="#">Settings</a>
        </div>
    )
}