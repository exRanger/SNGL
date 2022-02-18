import React from 'react'
import "./Profile.css"

import {useSelector} from 'react-redux'

export const Profile = () => {

    const {profile} = useSelector((state) => state.profileReducer)
    
    return (
        <div className='profile'>
           {  profile ? <h1>{profile.name}</h1> : <h1>no-data</h1>}
        </div>
    )
}
