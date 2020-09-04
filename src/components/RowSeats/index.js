import React from 'react'

import Seat from '../Seat'

const RowSeats = (props) => {
    let seatNumbers = [];
    for (let i = 0; i < +props.row.count; i++) {
        seatNumbers.push(i+1)
    }
    return seatNumbers.map((seatNumber, index) => <Seat key={index} seat={seatNumber}></Seat>)
}

export default RowSeats