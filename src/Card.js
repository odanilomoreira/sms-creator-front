import React, { useState } from 'react'
import './Card.css'

function Card({ cardTitle, bodyTitle }) {
    const [message, setMessage] = useState("")
    
    return (
        <div className='card'>
            <div className="card__header"><h1>{cardTitle}</h1></div>
                <div className="card__container"><h3>{bodyTitle}</h3>
                <div className="card__body"><textarea value={message} onChange={e => setMessage(e.target.value)} /></div>
                <span>Characters: {message.length ? message.length : '0'}</span>
                
                <div className="card__add"><strong>Add</strong>
                <div className="card__addItems">
                <span>Due Time</span>
                <span>Resta</span>
                <span>Due Time</span>
                </div>
                </div>
                <div className="card__buttonsWrapper">
                    <button className="card__cancelButton">Cancel</button>
                    <button className="card__saveButton">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Card
