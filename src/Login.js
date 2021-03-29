import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import vendorLogin from './vendor_login.jpg';
import axios from 'axios'
import pvmtLogo from './pvmt_logo.jpg'

// const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

const api = axios.create({ baseURL: 'https://4288e7e9c75c.ngrok.io' })

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
          history.push("/thank-you");
        }
      }, [history])
    
    const signIn = async e => {
        e.preventDefault()
        const headers = { header: { "Content-Type": "application/json"} }
        try {
            const res = await api.post('/login', {"email": email, "password": password}, headers)
            // console.log(res.data.access_token)
            
            localStorage.setItem("access_token", res.data.access_token)
            localStorage.setItem("username", res.data.username)
            localStorage.setItem("email", email)
            localStorage.setItem("restaurant_id", res.data.restaurant_id)
            console.log('restaurant_id',res.data.restaurant_id)
            history.push('/')
        }catch (error) {
            setError(error.response.data.message)
            console.log('error', error.response.data.message)
        }
        
    }

    return (
        <div className='login'>
            <div className="login__header">
                <img src={pvmtLogo} />
            </div>
            <div className="login__container">
                <form>
                    <img src={vendorLogin} />
                    <p className="login__error">{error}</p>
                    <p>E-mail Address:</p>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <p>Password:</p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="login__rememberMe">
                        <input type="checkbox" id="remember_me" />
                        <label className="login__x-small" for="remember_me">Remember Me</label>    
                    </div>
                    
                    <button type='submit' onClick={signIn} className='login__signInButton'>sign in</button>
                    
                    <Link to='/forgot'>
                        <span className="login__x-small">Forgot your password?</span>
                    </Link>

                    <Link to='/register'>
                        <span className={`login__x-small login__register`}>Register</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
