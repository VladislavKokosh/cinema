import React from 'react'
import { useDispatch } from 'react-redux';

import { setChoisePlacesAsync } from '../../store/actions/places'
import { Typography } from 'antd';

import './index.scss'


const { Text } = Typography;

const Seat = ({seat, row, cost, occupied, choise, sessionId}) => {

    const dispatch = useDispatch()
    const onChoise = () => {
        /* let user = localStorage.getItem('user'); */
        let choiseSeat = {
            id_session: sessionId,
            row: row,
            place: seat,
            cost: cost,
            id_user: '5f6c8a0f9871cd30acc0d700'
        }
        dispatch(setChoisePlacesAsync(choiseSeat))
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
