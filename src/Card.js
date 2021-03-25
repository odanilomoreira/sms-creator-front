import React, { useState } from 'react'
import './Card.css'
import InputMask from "react-input-mask";

function Card({ cardTitle, bodyTitle, currentMessage, currentSecretID, hideBody, hideButtons, showText }) {
    const [message, setMessage] = useState(currentMessage ? currentMessage : "")
    const [secretID, setSecretID] = useState(currentSecretID ? currentSecretID : "")
    const handleSave = e => {
        e.preventDefault()
    }

    const handleCancel = e => {
        e.preventDefault()
    }

    return (
        <div className='card'>
            <div className="card__header"><h1>{cardTitle}</h1></div>
                <form>
                    
                    <div className="card__container"><h3>{bodyTitle}</h3>
                    {!hideBody && (
                        <div className="card__bodyWrapper">
                        
                        <div className="card__body"><textarea value={message} onChange={e => setMessage(e.target.value)} /></div>
                    
                        <span>Characters: {message.length ? message.length : '0'}</span>
                        
                        <div className="card__add"><strong>Add</strong>
                        <div className="card__addItems">
                        <span>Due Time</span>
                        <span>Restaurant Name</span>
                        <span>Customer Name</span>
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

                        <div className="card__settings">
                            <p>Restaurant Secret ID</p>
                            <div className="card__body"><InputMask mask="999 99999 9999999" value={secretID} onChange={e => setSecretID(e.target.value)} /></div>
                            <span>Characters: {secretID.length ? secretID.length : '0'}</span>
                        </div>
                        

                        {!hideButtons && (
                            <div className="card__buttonsWrapper">
                                <button onClick={handleCancel} className="card__cancelButton">Cancel</button>
                                <button type="submit" onClick={handleSave} className="card__saveButton">Save</button>
                            </div>
                         )}
                    </div>
                </form>
        </div>
    )
}

export default Card
