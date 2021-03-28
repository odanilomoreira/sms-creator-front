import React, { useState } from 'react'
import './Card.css'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

function Card({ cardTitle, 
                bodyTitle, 
                currentMessage, 
                currentSecretID, 
                hideBody, 
                SettingsButtons, 
                PickupButtons,
                DeliveryButtons,
                showText, 
                showSettings }) {
    
    
    const restaurant_id = localStorage.getItem('restaurant_id')

    const pickupSave = async e => {
        e.preventDefault()
        const headers = { header: { "Content-Type": "application/json"} }
        try {
            const res = await api.put('/restaurant/'+restaurant_id, {"pickup_message": message}, headers)
            localStorage.setItem("pickup_message", message)
            alert(res.data.message)

        }catch (error) {
            setError(error.response.data.message)
            alert('error', error.response.data.message)
            
        }
        
    }


    const deliverySave = async e => {
        e.preventDefault()
        const headers = { header: { "Content-Type": "application/json"} }
        try {
            const res = await api.put('/restaurant/'+restaurant_id, {"delivery_message": message}, headers)
            localStorage.setItem("delivery_message", message)
            alert(res.data.message)

        }catch (error) {
            setError(error.response.data.message)
            alert('error', error.response.data.message)
        }
        
    }
    

    const [message, setMessage] = useState(currentMessage ? currentMessage : "")
    const [secretID, setSecretID] = useState(currentSecretID ? currentSecretID : "")
    const [error, setError] = useState("")

    const [cursorPosition, setCursorPosition] = useState(0)
    
    const settingsClear = e => {
        e.preventDefault()
        setSecretID("")
    }

    const settingsSave = e => {
        e.preventDefault()
    }

    const deliveryClear = e => {
        e.preventDefault()
        setMessage("")
        
    }

    const pickupClear = e => {
        e.preventDefault()
        setMessage("")
    }

    // const addText = text => setMessage(message+text)

    const addText = text => {
        let textBeforeCursorPosition = message.substring(0, cursorPosition)
        let textAfterCursorPosition = message.substring(cursorPosition, message.length)
        setMessage(textBeforeCursorPosition + text + textAfterCursorPosition)
      }

    return (
        <div className='card'>
            <div className="card__header"><h1>{cardTitle}</h1></div>
                <form>
                    
                    <div className="card__container"><h3>{bodyTitle}</h3>
                    {!hideBody && (
                        <div className="card__bodyWrapper">
                        
                        <div className="card__body"><textarea maxlength="140" value={message} onChange={e => {
                                                                                                                setMessage(e.target.value)
                                                                                                                setCursorPosition(e.target.selectionStart)
                                                                                                                }} /></div>
                    
                        <span>Characters: {message.length ? message.length : '0'}</span>
                        
                        <div className="card__add"><strong>Add</strong>
                        <div className="card__addItems">


                        <span onClick={() => addText("[DUE_TIME]")}>Due Time</span>
                        <span onClick={() => addText("[RESTAURANT_NAME]")}>Restaurant Name</span>
                        <span onClick={() => addText("[CUSTOMER_NAME]")}>Customer Name</span>
                        </div>
                        </div>
                    
                        </div>
                        )}

                        {showText && (
                            <div className="card__text">
                                <p>Welcome to the Message Center!</p>
                                <p>Click the Message icon on the right to edit your customer SMS messages.</p>
                                <br />
                                <p>Thanks!</p>
                            </div>
                        )}
                        {showSettings && (
                            <div className="card__settings">
                                <p>Restaurant Secret ID</p>
                                <div className="card__body"><input value={secretID} onChange={e => setSecretID(e.target.value)} /></div>
                                <span>Characters: {secretID.length ? secretID.length : '0'}</span>
                            </div>
                        )}

                        

                        {SettingsButtons && (
                            <div className="card__buttonsWrapper">
                                <button onClick={settingsClear} className="card__cancelButton">Clear</button>
                                <button type="submit" onClick={settingsSave} className="card__saveButton">Save</button>
                            </div>
                         )}

                         {PickupButtons && (
                            <div className="card__buttonsWrapper">
                                <button onClick={pickupClear} className="card__cancelButton">Clear</button>
                                <button type="submit" onClick={pickupSave} className="card__saveButton">Save</button>
                            </div>
                         )}

                         {DeliveryButtons && (
                            <div className="card__buttonsWrapper">
                                <button onClick={deliveryClear} className="card__cancelButton">Clear</button>
                                <button type="submit" onClick={deliverySave} className="card__saveButton">Save</button>
                            </div>
                         )}
                    </div>
                </form>
        </div>
    )
}

export default Card
