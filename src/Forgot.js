import React from 'react'
import './Forgot.css'
import pvmtLogo from './pvmt_logo.jpg'

function Forgot() {
    return (
        <div className='forgot'>
            
            <div className="forgot__header">
                <img src={pvmtLogo} />
            </div>
            <h1>Type your email</h1>
            <input></input>
        </div>
    )
}

export default Forgot