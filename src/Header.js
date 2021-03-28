import React, { useState, useEffect } from 'react'
import './Header.css'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link, useHistory } from 'react-router-dom';
import Notifications from './Notifications';

function Header({ selected }) {
    const [accessToken, setAccessToken] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [restaurantID, setRestaurantID] = useState("")
    const history = useHistory()

    const logout = e => {
        e.preventDefault()
        localStorage.clear()
        // localStorage.removeItem("access_token")
        // localStorage.removeItem("username")
        // localStorage.removeItem("email")
        // localStorage.removeItem("restaurant_id")
        history.replace('/login')
    }
  

    useEffect(() => {
        setAccessToken(localStorage.getItem("access_token"))
        setUsername(localStorage.getItem("username"))
        setEmail(localStorage.getItem("email"))
        setRestaurantID(localStorage.getItem("restaurant_id"))
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
                    <Link to='/sms-history'>
                        <div className="header__optionColTwo">
                            <div className="header__messageCount"><Notifications length /></div>
                        </div>
                    </Link>
                </div>
            </div>

            <Link onClick={logout}>
                <div className="header__option">
                    <div className="header__optionButtonWrapper">
                        <PowerSettingsNewIcon />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Header
