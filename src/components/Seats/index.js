import React from 'react'

import RowSeats from '../RowSeats'

const Seats = ({ hall, currentSession, sessionId }) => {

    return(
        <div className='seats'>
            {hall?.seats?.map((seat, index) => {
                    return (
                        <RowSeats
                            key={ index }
                            seat = { seat }
                            currentSession={ currentSession }
                            sessionId={sessionId}
                        />
                    )
                })}
        </div>
    )
}

export default Seats
