import React from 'react'

import RowSeats from '../RowSeats'

const Seats = (props) => {
return(
    <div className='seats'>
        {props.hall?.seats.map((seat, index) => {
                return (
                    <RowSeats key={index} row={seat}></RowSeats>
                )
            })}
    </div>
)}

export default Seats