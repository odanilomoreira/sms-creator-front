import React, { useState, useEffect } from 'react'
import './Notifications.css'
import Sync from 'twilio-sync';

function Notifications({ length,
                         order_type,
                         name,email,
                         sent_to,
                         sent_from,
                         date_sent,
                         log,
                         restaurant_name,
                         restaurant_id,
                         users_ids  }) {
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:4242/token", { method: "POST" })
          .then((res) => res.json())
          .then((data) => {
            
            const syncClient = new Sync(data.token)

            syncClient.list("msgList").then((list) => {
        
            //   list.removeList()

            list.getItems().then((page) => {
            setMessages(page.items?.map((item) => item.descriptor.data))

            })
            list.on("itemAdded", (e) => {
                setMessages(messages => messages.concat(e.item.descriptor.data));
              })
          })
        })
      }, [])
    
    return (
        <div className="notifications">
            {messages.length ?
                <>
                {length && messages.length}
                {order_type && messages.map((message, index) => <p key={index}>{message.order_type}</p>)}
                {name && messages.map((message, index) => <p key={index}>{message.name}</p>)}
                {email && messages.map((message, index) => <p key={index}>{message.email}</p>)}
                {sent_to && messages.map((message, index) => <p key={index}>{message.sent_to}</p>)}
                {sent_from && messages.map((message, index) => <p key={index}>{message.sent_from}</p>)}
                {date_sent && messages.map((message, index) => <p key={index}>{message.date_sent}</p>)}
                {log && messages.map((message, index) => <p key={index}>{message.log}</p>)}
                {restaurant_name && messages.map((message, index) => <p key={index}>{message.restaurant_name}</p>)}
                {restaurant_id && messages.map((message, index) => <p key={index}>{message.restaurant_id}</p>)}
                {users_ids && messages.map((message, index) => <p key={index}>{message.users_ids}</p>)} 
                </>
            :
                <p></p>
            }
        </div>
    )
}
export default Notifications