import React, { useState, useEffect } from 'react'
import './Header.css'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

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
            <div className="header__option">
                <h1>{selected ? selected : "Dashboard"}</h1>
            </div>
            <div className="header__option">
                <div className="header__optionWrapper">
                    <div className="header__optionColOne">
                        <span className="header__optionLineOne">{localStorage.getItem("access_token") ? username : "Guest"}</span>
                        <span className="header__optionLineTwo">{localStorage.getItem("access_token") ? email : ""}</span>
                    </div>
                    <div className="header__optionColTwo">
                        <div className="header__messageCount">1</div>
                    </div>
                </div>
            </div>

            <div className="header__option">
                <PowerSettingsNewIcon />
            </div>
        </div>
    )
}

export default Header
