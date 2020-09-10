import React from 'react'

import RowSeats from '../RowSeats'

const Seats = ({ hall, sessionId}) => {

    return(
        <div className='seats'>
            {hall?.seats.map((seat, index) => {
                    return (
                        <RowSeats key={ index } row={ seat } sessionId={ sessionId }></RowSeats>
                    )
                })}
        </div>
    )
}

export default Seats
