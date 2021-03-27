import React from 'react'
import './TableCard.css'
import Notifications from './Notifications';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

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
                <Notifications nameAndEmail />
                <Notifications sent_to />
                <Notifications sent_from />
                <Notifications date_sent />
                <Notifications log />
            </div>
        </div>
    )
}

export default TableCard
