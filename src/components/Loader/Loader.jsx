  import React , {Fragment} from 'react'
  import {useSelector} from 'react-redux'
  import './Loader.css'
export const Loader = () => {
    const {loading} = useSelector(state => state.loaderReducer)
    
    if(loading){
        console.log(loading)
        return (
            <div className="spinner-grow loader"   role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
     )
        }
        return null
     

}