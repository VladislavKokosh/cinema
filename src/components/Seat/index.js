import React from 'react'

import { Typography } from 'antd';

import './index.scss'

const { Text } = Typography;

const Seat = ({seat, occupied}) => {

    return (
        <span className={`seat ${occupied ? 'seat_occupied' : ''}`}><Text strong>{seat}</Text></span>
    )
}

export default Seat
