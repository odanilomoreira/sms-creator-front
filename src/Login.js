import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import vendorLogin from './vendor_login.jpg';
import axios from 'axios'
import pvmtLogo from './pvmt_logo.jpg'

const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
          history.push("/");
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
            history.push('/')
        }catch (error) {
            alert(error.response.data.message)
        }
        
    }

    const forgot = e => {
        e.preventDefault()
        console.log('forgot')
    }

    return (
        <div className='login'>
            <div className="login__header">
                <img src={pvmtLogo} />
            </div>
            <div className="login__container">
                <form>
                    <img src={vendorLogin} />
                    
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
                        <span className="login__x-small" onClick={forgot}>Forgot your password?</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
