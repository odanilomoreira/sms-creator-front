import React, { useState, useEffect } from 'react'
import './Header.css'

function Header({ selected }) {
    const [accessToken, setAccessToken] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
  

    useEffect(() => {
        setAccessToken(localStorage.getItem("access_token"))
        setUsername(localStorage.getItem("username"))
        setEmail(localStorage.getItem("email"))
    },[])

    return (
        <div className='header'>
             <h1>{selected ? selected : "Dashboard"}</h1>
            <p>Hello {localStorage.getItem("access_token") ? username : "Guest"}</p>
            <p>{localStorage.getItem("access_token") ? email : ""}</p>
        </div>
    )
}

export default Header
