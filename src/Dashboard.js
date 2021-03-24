import React from 'react'
import './Dashboard.css'
import Card from './Card'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard__cardWrapper">
                <Card 
                cardTitle="Pick SMS"
                bodyTitle="Current Message"
                />
            </div>
            <div className="dashboard__cardWrapper">
                <Card 
                cardTitle="Delivery SMS"
                bodyTitle="Current Message"
                />
            </div>
        </div>
    )
}

export default Dashboard
    