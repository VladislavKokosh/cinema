import React from 'react'

import Seat from '../Seat'

const Seats = (props) => {
return(
    <div className='seats'>
        {props.hall?.seats.map(seat => {
                let seatNumbers = [];
                for (let i = 0; i < +seat.count; i++) {
                    seatNumbers.push(i+1)
                }
                return seatNumbers.map(seatNumber => <Seat seat={seatNumber}></Seat>)
            })}
    </div>
)}

export default Seats