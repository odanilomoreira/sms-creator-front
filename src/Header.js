import React from 'react'
import './Header.css'
import pvmtLogo from './pvmt_logo.jpg'

function Header() {
    return (
        <div className='header'>
            <img src={pvmtLogo} />
        </div>
    )
}

export default Header
