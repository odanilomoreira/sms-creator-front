import React, { useState, useEffect } from 'react'
import './Notifications.css'
import Sync from 'twilio-sync';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Notifications({ length,
                         order_type,
                         nameAndEmail,
                         sent_to,
                         sent_from,
                         date_sent,
                         log,
                         restaurant_name,
                         restaurant_id,
                         users_ids  }) {

    const [messages, setMessages] = useState([])    
    
    const successStyle = {
        backgroundColor: '#5fcfaa'
    }

    const failStyle = {
        backgroundColor: '#e9797a'
    }

    useEffect(() => {

        if (localStorage.getItem("restaurant_id")){

        fetch("http://localhost:4242/token", { method: "POST" })
          .then((res) => res.json())
          .then((data) => {
            
            const syncClient = new Sync(data.token)

            syncClient.list("msgList").then((list) => {
        
            //   list.removeList()


            const tempList = []
            list.getItems().then((page) => {
            for (let item of page.items) {
                if (localStorage.getItem("restaurant_id") === item.descriptor.data.restaurant_id){
                    tempList.push(item.descriptor.data)
                }
            }
            // setMessages(page.items?.map((item) => item.descriptor.data))
            setMessages(tempList)
            })
            list.on("itemAdded", (e) => {
                if (localStorage.getItem("restaurant_id") === e.item.descriptor.data.restaurant_id){
                setMessages(messages => messages.concat(e.item.descriptor.data));
            }
              })


          })
        })
    }
      }, [])
    
    return (
        <div className="notifications">
            {messages.length ?
                <>
                {length && messages.length}
                {order_type && messages.map((message, index) => <p className="notifications__orderType" key={index}>
                    {
                    message.order_type === 'Pickup' ? <LocalMallIcon /> : <MotorcycleIcon />
                    }</p>)}          
                {nameAndEmail && messages.map((message, index) => <p className="notifications__nameAndEmail" key={index}>
                    {message.name}<span>{message.email}</span>
                    </p>)}
                {sent_to && messages.map((message, index) => <p key={index}>{message.sent_to}</p>)}
                {sent_from && messages.map((message, index) => <p key={index}>{message.sent_from}</p>)}
                {date_sent && messages.map((message, index) => <p key={index}>{message.date_sent}</p>)}
                {log && messages.map((message, index) => <p className="notifications__log" key={index}>
                    {message.log === 'fail' ? 
                        <span style={failStyle}>{message.log}</span> 
                        : 
                        <span style={successStyle}>{message.log}</span> }
                </p>)}
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