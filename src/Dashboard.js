import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Card from './Card'
import Section from './Section'

function Dashboard() {
    const [username, setUsername] = useState("Guest")

    useEffect(() => {
        setUsername(localStorage.getItem("username"))
    },[])
    return (
        <div className='dashboard'>
            <div className="dashboard__container">
                <Section title={username? `Hey ${username}` : 'Hey Guest'} />
                <div className="dashboard__cards">
                    
                    <Card 
                    cardTitle="Message Center"
                    hideBody hideButtons showText
                    />
                </div>
            </div>            
        </div>
    )
}

export default Dashboard
    