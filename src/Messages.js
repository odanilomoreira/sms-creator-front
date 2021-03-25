import React from 'react'
import './Messages.css'
import Card from './Card'
import Section from './Section'

function Messages() {
    return (
        <div className='messages'>
            <div className="messages__container">
                <Section title="Custom SMS"/>
                <div className="messages__cards">
                    
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

export default Messages
    