import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'

const Ticket = ({film, date, hall, seat, row, cost}) => {

    const getTime = (time) => {
        var ticketTime = moment(time);
        ticketTime.local('ru');
        return ticketTime.format('LLLL')
    }

    return(
        <div className='ticket'>
            {film} , {getTime(+date)} ,{hall} , {seat}, {row}, {cost}
        </div>
    )
}

export default Ticket