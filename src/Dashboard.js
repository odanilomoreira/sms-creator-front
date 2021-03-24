import React from 'react'
import './Dashboard.css'
import Card from './Card'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard__cardWrapper">
                <Card 
                cardTitle="Card Title"
                bodyTitle="Card Body"
                />
            </div>
            <div className="dashboard__cardWrapper">
                <Card 
                cardTitle="Second Card Title"
                bodyTitle="Second Card Body"
                />
            </div>
        </div>
    )
}

export default Dashboard
    