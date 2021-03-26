import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Register.css'
import axios from 'axios'
import pvmtLogo from './pvmt_logo.jpg'

const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

function Register() {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [restaurantID, setRestaurantID] = useState('')

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
          history.push("/");
        }
      }, [history])
    
    const signIn = async e => {
        e.preventDefault()
        const headers = { header: { "Content-Type": "application/json"} }
        try {
            const res = await api.post('/register', {"username": username, 
                                                    "email": email, 
                                                    "password": password,
                                                     "restaurant_id": restaurantID}, headers)
            // console.log(res.data.access_token)
            console.log(res)
            history.push('/')
        }catch (error) {
            alert(error.response.data.message)
        }
        
    }

    return (
        <div className='register'>
            <div className="register__header">
                <img src={pvmtLogo} />
            </div>
            <div className="register__container">
                <form>
                    <h2>Vendor Register</h2>
                    <p>Username:</p>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    
                    <p>E-mail Address:</p>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <p>Password:</p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <p>Restaurant ID:</p>
                    <input type="password" value={restaurantID} onChange={e => setRestaurantID(e.target.value)} />
                                        
                    <button type='submit' onClick={signIn} className='register__signInButton'>register</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Register
