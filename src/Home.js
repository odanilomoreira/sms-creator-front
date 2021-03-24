import React, { useState, useEffect } from 'react'
import './Home.css'

function Home() {
    const [accessToken, setAccessToken] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        setAccessToken(localStorage.getItem("access_token"))
        setUsername(localStorage.getItem("username"))
        setEmail(localStorage.getItem("email"))
    },[])

    return (
        <div className='home'>
            <h1>Hello {localStorage.getItem("access_token") ? username : "Guest"}</h1>
            <h2>{localStorage.getItem("access_token") ? email : ""}</h2>
        </div>
    )
}

export default Home
