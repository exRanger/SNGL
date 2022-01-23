import React from 'react'
import './NotFound.css'
export const NotFound = ({codeError, errorInfo}) => { 
                
    codeError = codeError || 404 
                          
    return (
        <div className="pageError">
            <h1>{errorInfo}</h1>
            <h2>Error {coedeError}</h2>
        </div>
    )
}
