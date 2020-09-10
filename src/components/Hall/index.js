import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from 'antd';

import Seats from '../Seats'
import { getSessionById } from '../../store/actions/sessions'
import { getHalls, getHallById } from '../../store/actions/halls';
import halls from '../../db/halls.json'
import './index.scss'


const { Title } = Typography;

const Hall = (props) => {

    const dispatch = useDispatch()
    const session = useSelector(state => state.sessions.sessionById)
    const hallById = useSelector(state => state.halls.hallById)

    useEffect(()=> {
        dispatch(getSessionById(props.match.params.id))
        dispatch(getHalls(halls))
        dispatch(getHallById(session.hall))
    }, [])

    return (
        <div className="hall">
            <div className="hall__screen">
                <Title level={5}>Экран</Title>
            </div>
            <div className="hall__places">
                <Seats hall={hallById}></Seats>
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
