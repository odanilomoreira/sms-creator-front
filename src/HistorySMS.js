import React, { useState, useEffect } from 'react'
import './HistorySMS.css'
import Section from './Section'
import TableCard from './TableCard'


function HistorySMS() {
    
    return (
        <div className='historySMS'>
            <div className="historySMS__container">
                <Section title="SMS History" />
                <div className="historySMS__cards">
                    <TableCard />
                </div>
            </div>            
        </div>
    )
}

export default HistorySMS
    