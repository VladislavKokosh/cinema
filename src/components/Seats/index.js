import React from 'react'

import RowSeats from '../RowSeats'

const Seats = (props) => {
return(
    <div className='seats'>
        {props.hall?.seats.map((seat, index) => {
                return <div><RowSeats key={index} row={seat}></RowSeats></div>
            })}
    </div>
)}

export default Seats