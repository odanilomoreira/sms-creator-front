import React, { useState } from 'react'
import './Messages.css'
import Card from './Card'
import Section from './Section'
import axios from 'axios'

// const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })
const api = axios.create({ baseURL: 'https://4288e7e9c75c.ngrok.io' })


function Messages() {
    const restaurant_id = localStorage.getItem("restaurant_id")

    const getRestaurantMessage = async () => {
        try {
            const res = await api.get('/restaurant/'+restaurant_id)
            localStorage.setItem("pickup_message", res.data.pickup_message)
            localStorage.setItem("delivery_message", res.data.delivery_message)
        }catch (error) {
            console.log('error', error.response.data.message)
        }
    }

    if (!localStorage.getItem("pickup_message") && restaurant_id){
        getRestaurantMessage()
    }

    return (
        <div className='messages'>
            <div className="messages__container">
                <Section title="Custom SMS"/>
                <div className="messages__cards">
                    
                    <Card 
                    cardTitle="Pick SMS"
                    bodyTitle="Current Message"
                    currentMessage={localStorage.getItem("pickup_message")} 
                    PickupButtons
                    />

                    <Card 
                    cardTitle="Delivery SMS"
                    bodyTitle="Current Message"
                    currentMessage={localStorage.getItem("delivery_message")} 
                    DeliveryButtons
                    />
                </div>
            </div>            
        </div>
    )
}

export default Messages
    