import React from 'react'
import './Settings.css'
import Card from './Card'
import Section from './Section'

function Settings() {
    return (
        <div className='settings'>
            <div className="settings__container">
                <Section title="Settings"/>
                <div className="settings__cards">
                    
                    <Card 
                    cardTitle="Secret ID"
                    currentSecretID="123123441234451"
                    hideBody
                    />
                    
                </div>
            </div>            
        </div>
    )
}

export default Settings
    