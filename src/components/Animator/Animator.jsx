import React, {useMemo} from 'react' 
import {useSelector} from 'react-redux'

import './Animator.css'
export const Animator = ({children}) => {
    const { isAnimate} = useSelector(state => state.animateReducer)

    const classes = useMemo(()=> isAnimate? 'animate' : '', [isAnimate])
    console.log('is animate?' + classes)
    return (
        <div className={classes}>
            {children}
        </div>
    )
}