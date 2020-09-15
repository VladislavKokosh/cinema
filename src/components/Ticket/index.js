import React from 'react'

const Ticket = ({film, date, hall, seat, row, cost}) => {
    return(
        <div className='ticket'>
            {film} , {date} ,{hall} , {seat}, {row}, {cost}
        </div>
    )
}

export default Ticket