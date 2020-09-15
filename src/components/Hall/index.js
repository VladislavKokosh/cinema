import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { Typography, Button } from 'antd';

import Seats from '../Seats'
import { getSessionByIdAsync } from '../../store/actions/sessions'
import { getHallIdByIdSessionAsync } from '../../store/actions/sessions'
import { getHallByIdAsync } from '../../store/actions/halls';
import { getPlacesAsync } from '../../store/actions/places'

import './index.scss'
import Loader from '../Loader';

const { Title } = Typography;

const Hall = (props) => {

    const dispatch = useDispatch()
    const sessionHall = useSelector(state => state.sessions.sessionHallId)
    const hallById = useSelector(state => state.halls.hallById)
    const isLoading = useSelector(state => state.loading.isLoading)
    const currentSession = useSelector(state => state.places.places)
    const choisePlaces = useSelector(state => state.places.choisePlaces)
    const [costSum, setCostSum] = useState(0)

    useEffect(() => {
        dispatch(getHallIdByIdSessionAsync(props.match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch(getHallByIdAsync(sessionHall))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionHall])

    useEffect(() => {
        dispatch(getPlacesAsync(sessionHall))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionHall])

    useEffect(() => {
        dispatch(getSessionByIdAsync(props.match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const sum = choisePlaces.reduce((sum, value) => sum + +value.cost, 0)
        setCostSum(sum)
    }, [choisePlaces])

    return (
    <div>
        {isLoading ? <Loader/> :
        <div className="hall">
            <div className="hall__screen">
                <Title level={5}>Экран</Title>
            </div>
            <div className="hall__places">
                <Seats hall={hallById} currentSession={currentSession}></Seats>
            </div>
            <div className="hall__about-places">
                <span className="hall__about-places-free"></span>
                <Title level={5}> - свободные</Title>
                <span className="hall__about-places-selected"></span>
                <Title level={5}> - выбранные</Title>
                <span className="hall__about-places-employed"></span>
                <Title level={5}> - заняты</Title>
            </div>
            <div className="hall__choise-places">
                {
                    choisePlaces?.length ? choisePlaces.map((choise, index) => (
                        <div
                            className="hall__choise-places-ticket"
                            key={index}
                        >
                            Билет № {index+1}
                            <p>Ряд {choise.row}, место {choise.seat}</p>
                        </div>
                    )) :
                    <div
                        className="hall__choise-places-nothing"
                    >
                        Вы не выбрали место.
                    </div>
                }
            </div>
            <div className="hall__purchase">
                <Title level={5}>Цена билетов: {costSum} руб.</Title>
                <Link to={`/ticket`}>
                    <Button
                        type="primary"
                    >
                        Купить
                    </Button>
                </Link>
            </div>
        </div>
        }
    </div>
    )
}

export default Hall
