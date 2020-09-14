import React from 'react'

import Seat from '../Seat'

const RowSeats = ({ seat, currentSession }) => {

    const CheckPlaces = (row, place, session) => {

        if(session?.seats) {
            const occupied = session.seats.find(elem => +elem.place === +place && +elem.row === +row)
            console.log(occupied)
            return !!occupied
        }
        return false
    }

    const setPlaces = () => {

        let seatNumbers = [];
        for (let i = 0; i < +seat.count; i++) {
            seatNumbers.push(<Seat key={i} seat={i+1} occupied={CheckPlaces(seat.row, i+1, currentSession)}></Seat>)
        }
        return seatNumbers
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            {setPlaces()}
        </div>
    )
}

export default RowSeats
