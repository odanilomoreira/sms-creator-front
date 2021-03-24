import React from 'react'
import './Card.css'

function Card({  }) {
    const charactersCount = () => {
        // handle characters count
    }
    return (
        <div className='card'>
            <div className="card__header"><h1>{cardTitle}</h1>
                <div className="card__container"><h3>{bodyTitle}</h3>
                <div className="card__body"><input type="text">{message}</input></div>
                <span>{charactersCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
