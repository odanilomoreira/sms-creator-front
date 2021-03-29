import React from 'react'
import './ResetPassword.css'
import pvmtLogo from './pvmt_logo.jpg'

function ResetPassword() {
    return (
        <div className='resetPassword'>
            
            <div className="resetPassword__header">
                <img src={pvmtLogo} />
            </div>
            <h1>Type your password twice</h1>
           <inpu></inpu>
           <input></input> 
           <button>Reset</button>
        </div>
    )
}

export default ResetPassword
