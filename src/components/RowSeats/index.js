import React from 'react'

import Seat from '../Seat'
import places from '../../db/places.json'

const RowSeats = ({ row, sessionId }) => {

    const currentSession = places?.find(place => +place.session === +sessionId);
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
        for (let i = 0; i < +row.count; i++) {
            seatNumbers.push(<Seat key={i} seat={i+1} occupied={CheckPlaces(row.row, i+1, currentSession)}></Seat>)
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
