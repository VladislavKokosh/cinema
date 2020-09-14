import React from 'react'
import { useDispatch } from 'react-redux';

import { setChoisePlacesAsync } from '../../store/actions/places'
import { Typography } from 'antd';

import './index.scss'


const { Text } = Typography;

const Seat = ({seat, row, occupied}) => {
    const dispatch = useDispatch()

    const onChoise = () => {

        let choiseSeat = {
            row: row,
            seat: seat
        }
        dispatch(setChoisePlacesAsync(choiseSeat))
    }

    return (
        <span
            className={`seat ${occupied ? 'seat_occupied' : ''}`}
            onClick={onChoise}
        >
            <Text strong>{seat}</Text>
        </span>
    )
}

export default Seat
