import React, { useEffect, useState } from 'react'
import './EmailConfirmed.css'
import pvmtLogo from './pvmt_logo.jpg'
import axios from 'axios'
import { useHistory } from 'react-router'
import emailConfirmedImg from './email_confirmed.png'
import { Link } from 'react-router-dom'

const api = axios.create({ baseURL: 'https://4288e7e9c75c.ngrok.io' })

function EmailConfirmed() {
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory()
    const userId = history.location.pathname.split('/')[2]
    console.log('userId',userId)
    
    const confirmMail = async () => {
        try {
            const res = await api.get(`/confirm/${userId}`)
            setMessage(res.data.message)
        }catch (error) {
            setError(error.response.data.message)
            console.log('error', error.response.data.message)
        }
    }
    useEffect(() => {
        confirmMail()
    },[history])
    
    return (
        <div className='emailConfirmed'>
            <Link to='/login'>
                <div className="emailConfirmed__header">
                    <img src={pvmtLogo} />
                </div>
            </Link>
            <div className="emailConfirmed__container">
                <img src={emailConfirmedImg} />
                
                <div className="emailConfirmed__message">
                <h3>{message}</h3>
                <h3>{error}</h3>
                </div>

                <Link to='/login'><span>login</span></Link>
            </div>
            
        </div>
    )
}

export default EmailConfirmed
