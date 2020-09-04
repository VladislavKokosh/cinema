import React, { useEffect, useState} from 'react'

import './index.scss'
import halls from '../../db/halls.json'
import { Typography } from 'antd';

const { Title } = Typography;

const Hall = () => {

const [hall, setHall] = useState(null);

useEffect(()=> {
    const getHallById = (id) => {
        const hall = halls.find(hall =>
            hall.id === id);
        return hall
    }

    setHall(getHallById("1"))
}, [])

return(
    <div className="hall">
        <div className="__screen">
            <Title level={5}>Экран</Title>
        </div>
        <div className="__places">
            {hall?.seats.map(seat => {
                for (let i = 1; i < +seat.count; i++) {
                    return <div>A</div>
                }
            })}
        </div>

    </div>
)}

export default Hall