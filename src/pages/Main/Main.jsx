import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Loader, Animator} from '../../components'
import {loadData} from '../../store/mock'
import './Main.css'

export const Main= () => {
    
    const fetched = useSelector(state => state.fetchReducer.fetched)
    const {loading}= useSelector(state => state.loaderReducer)
    const dispatch = useDispatch()
    
    if (loading) {
        return <Loader/>
    }
    
    const handleClick = (e)  => {
        dispatch(loadData())
    }
  
    return (
        <Animator>
             <div className="main">
             <h1>Main Page</h1>
              <button onClick={handleClick}>Make a fetch request</button> 
               <div>
                   {fetched.map((elem)=>{return <div key={elem.id}>{elem.title}</div>})}
                </div>   
            </div>
         </Animator>
    )
}
