import React from 'react'
import './ThankYou.css'
import pvmtLogo from './pvmt_logo.jpg'
import thankYouImg from './thank_you.png'
import mailImg from './mail.png'
import { Link } from 'react-router-dom'

function ThankYou() {
    return (
        <div className='thankYou'>
            <Link to="/login">
            <div className="thankYou__header">
                <img src={pvmtLogo} />
            </div>
            </Link>
            <div className="thankYou__container">
                <img src={thankYouImg} />
                <div className="thankYou__body">
                    <p>We sent an email to "{localStorage.getItem("email")}"</p>
                    <p>To continue, please check your email and verify your account.</p>
                    <br />
                    <div className="thankYou__mailContainer">
                        <div className="thankYou__didntReceive">
                        <p>Didn't receive the email?</p>
                        <span>Resend Email</span>
                        </div>
                        <div className="thankYou__mail">
                            <img src={mailImg} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ThankYou






