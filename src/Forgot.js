import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Forgot.css'
import pvmtLogo from './pvmt_logo.jpg'
import forgotImg from './forgot.png'

function Forgot() {
    const [email, setEmail] = useState('')
    const sendMail = e => {
        e.preventDefault()
    }
    return (
        <div className='forgot'>
            <Link to='/login'>
            <div className="forgot__header">
                <img src={pvmtLogo} />
            </div>
            </Link>

            
            <div className="forgot__container">
            <form>
                <img src={forgotImg} />
                <p>Type your email, so we can send you a reset link:</p>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />                
                <button type='submit' onClick={sendMail} >send email</button>
            </form>
            </div>
        </div>
    )
}

export default Forgot