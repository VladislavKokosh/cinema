import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Typography, Button } from 'antd';

import Ticket from '../Ticket'
import './index.scss'
import { setPlacesAsync } from '../../store/actions/places';

const { Title } = Typography;

const Tickets = () => {
    const dispatch = useDispatch()
    const film = useSelector(state => state.films.filmById)
    const hall = useSelector(state => state.halls.hallById)
    const session = useSelector(state => state.sessions.sessionById)
    const places = useSelector(state => state.places.choisePlaces)
    const choisePlaces = useSelector(state => state.places.choisePlaces)
    const [costSum, setCostSum] = useState(0)

    useEffect(() => {
        const sum = choisePlaces.reduce((sum, value) => sum + +value.cost, 0)
        setCostSum(sum)
    }, [choisePlaces])

    const onClickBuy = (placeObj) => {
        dispatch(setPlacesAsync(placeObj))
    }

    return(
        <div className="ordering">
            <div className='__tickets'>
                {places?.map((place, index) => (
                    <Ticket
                        film={film.name}
                        filmDuration={film.duration}
                        date={session.date}
                        hall={hall.title}
                        seat={place.seat}
                        row={place.row}
                        cost={place.cost}
                        key={index}
                    />)
                )}
            </div>
            <div className="__purchase">
                <Title level={5}>Стоимость билетов: {costSum} блр. руб.</Title>
                <Button type="primary" onClick={() => onClickBuy({id: 1, choisePlaces:choisePlaces})}>Купить</Button>
            </div>
        </div>
    )
}

export default Tickets