import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setChoisePlacesAsync } from '../../store/actions/places'
import { message, Typography } from 'antd';

import './index.scss'


const { Text } = Typography;

const Seat = ({seat, row, cost, occupied, choise, sessionId}) => {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.users.user.id)
    const onChoise = () => {
        if(occupied){
            message.warning('Это место уже выбрано!')
        }
        else {
            let choiseSeat = {
                id_session: sessionId,
                row: row,
                place: seat,
                cost: cost,
                id_user: userId
            }
            dispatch(setChoisePlacesAsync(choiseSeat))
        }
    }

    return (
        <span
            className={`seat ${occupied ? 'seat_occupied' : ''} ${choise ? 'seat_choise': ''}`}
            onClick={onChoise}
        >
            <Text strong>{seat}</Text>
        </span>
    )
}

export default Seat
