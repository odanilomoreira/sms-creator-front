import React from 'react'
import './EmailConfirmed.css'
import pvmtLogo from './pvmt_logo.jpg'

function EmailConfirmed() {
    return (
        <div className='emailConfirmed'>
            
            <div className="emailConfirmed__header">
                <img src={pvmtLogo} />
            </div>
            <h1>Congrats! Your email has been confirmed!</h1>
        </div>
    )
}

export default EmailConfirmed
