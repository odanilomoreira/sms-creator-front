import React, { useState, useEffect } from 'react'
import './Settings.css'
import Card from './Card'
import Section from './Section'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

function Settings() {  
    return (
        <div className='settings'>
            <div className="settings__container">
                <Section title="Settings"/>
                <div className="settings__cards">
                    
                    <Card 
                    cardTitle="Secret ID"
                    currentSecretID={localStorage.getItem('restaurant_id')}
                    hideBody showSettings SettingsButtons
                    />
                    
                </div>
            </div>            
        </div>
    )
}

export default Settings
    