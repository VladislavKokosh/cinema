import React from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../Ticket'

const Tickets = () => {
    const film = useSelector(state => state.films.filmById)
    const hall = useSelector(state => state.halls.hallById)
    const session = useSelector(state => state.sessions.sessionById)
    const places = useSelector(state => state.places.choisePlaces)

    return(
        <div className='tickets'>
            {places?.map((place, index) => (
                <Ticket
                    film={film.name}
                    date={session.date}
                    hall={hall.title}
                    seat={place.seat}
                    row={place.row}
                    cost={place.cost}
                    key={index}
                />)
            )}
        </div>
    )
}

export default Tickets