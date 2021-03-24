import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import vendorLogin from './vendor_login.jpg';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const signIn = e => {
        e.preventDefault()
        console.log('Sign In',email,password)
    }

    const forgot = e => {
        e.preventDefault()
        console.log('forgot')
    }

    return (
        <div className='login'>
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
