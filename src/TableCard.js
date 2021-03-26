import React from 'react'
import './TableCard.css'
import Notifications from './Notifications';

function TableCard({  }) {
  
    // const myDate = new Date(1589051571989).toUTCString()

    return (
        <div className='tableCard'>
            <div className="tableCard__header">
                <div>Type</div>
                <div>Name & Email</div>
                <div>Sent To</div>
                <div>Sent From</div>
                <div>Date Sent</div>
                <div>Log</div>       
            </div>
            <div className="tableCard__container">
                <Notifications order_type />
                <div className="tableCard__nameAndEmail">
                <div className="tableCard__name">
                    <Notifications name />
                </div>
                <div className="tableCard__email">
                    <Notifications email />
                </div>
                </div>
                <Notifications sent_to />
                <Notifications sent_from />
                <Notifications date_sent />
                <Notifications log />
            </div>
        </div>
    )
}

export default TableCard
