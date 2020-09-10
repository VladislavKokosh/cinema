import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from 'antd';

import Seats from '../Seats'
import { getSessions } from '../../store/actions/sessions'
import halls from '../../db/halls.json'
import sessions from '../../db/session.json'
import './index.scss'


const { Title } = Typography;

const Hall = (props) => {

    const dispatch = useDispatch()
    const session = useSelector(state => state.sessions.sessions)
    useEffect(()=>{
        dispatch(getSessions(sessions))
    }, [])

    const [hall, setHall] = useState(null);

    useEffect(()=> {

        const getSession = (id) => {
            const session = sessions.find(session =>
                session.id === id);
            return session.hall
        }

        const getHallById = (id) => {
            const hall = halls.find(hall =>
                hall.id === id);
            return hall
        }

        setHall(getHallById(getSession(props.match.params.id)))
    }, [])

    return (
        <div className="hall">
            <div className="hall__screen">
                <Title level={5}>Экран</Title>
            </div>
            <div className="hall__places">
                <Seats hall={hall}></Seats>
            </div>
            <div className="hall__about-places">
                <span className="hall__about-places-free"></span>
                <Title level={5}> - свободные</Title>
                <span className="hall__about-places-selected"></span>
                <Title level={5}> - выбранные</Title>
                <span className="hall__about-places-employed"></span>
                <Title level={5}> - заняты</Title>
            </div>
        </div>
    )
}

export default Hall
