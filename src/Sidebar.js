import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SettingsIcon from '@material-ui/icons/Settings';
import dashIcon from './dash_logo.jpg'
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Sidebar() {
    const isActive = () => {
        console.log('clicked')
    }


    return (
        <div className='sidebar'>
            <img src={dashIcon} />
            <div className={`sidebar__iconWrapper`}>
            
            <Link to='/dashboard'>
                <IconButton>
                    <DashboardIcon />
                </IconButton>
            </Link>
            <Link to='/messaging-center'>
                <IconButton>
                    <ChatBubbleIcon />
                </IconButton> 
            </Link>
            </div>
            <Link to='/settings'>
                <IconButton>
                    <SettingsIcon />            
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Sidebar
