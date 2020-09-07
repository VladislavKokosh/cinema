import React, { useEffect, useState} from 'react'

import Seats from '../Seats'
import './index.scss'
import halls from '../../db/halls.json'
import sessions from '../../db/session.json'
import { Typography } from 'antd';

const { Title } = Typography;

const Hall = (props) => {

const [hall, setHall] = useState(null);
const [sessionId, setSession] = useState(null);

useEffect(()=> {

    const getSession = (id) => {
        const session = sessions.find(session =>
            session.id === id);
        return session.hall
    }

    setSession(getSession(props.match.params.id))

    const getHallById = (id) => {
        const hall = halls.find(hall =>
            hall.id === id);
        return hall
    }

    setHall(getHallById(sessionId))
}, [])

return(
    <div className="hall">
        <div className="__screen">
            <Title level={5}>Экран</Title>
        </div>
        <div className="__places">
            <Seats hall={hall}></Seats>
        </div>
        <div className="__about-places">
            <span className="-free"></span><Title level={5}> - свободные,</Title><span className="-selected"></span><Title level={5}> - выбранные,</Title><span className="-employed"></span><Title level={5}> - заняты,</Title>
        </div>
    </div>
)}

export default Hall