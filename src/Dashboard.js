import React from 'react'
import './Dashboard.css'
import Card from './Card'
import Section from './Section'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard__container">
                <Section title="Custom SMS"/>
                <div className="dashboard__cards">
                    
                    <Card 
                    cardTitle="Pick SMS"
                    bodyTitle="Current Message"
                    currentMessage="Hey there! Your order will be ready to pickup at 123 This Street. See you soon!"
                    />
                    <Card 
                    cardTitle="Delivery SMS"
                    bodyTitle="Current Message"
                    currentMessage="Hey there! Your order will be delivered shortly. See you soon!"
                    />
                </div>
            </div>            
        </div>
    )
}

export default Dashboard
    