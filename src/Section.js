import React from 'react'
import './Section.css'

function Section({ title }) {
    return (
        <div className='section'>
            <h1>{ title }</h1>
        </div>
    )
}

export default Section
