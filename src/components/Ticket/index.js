import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'

import { Card } from 'antd';
import { Steps } from 'antd';
import './index.scss'
const { Step } = Steps;
const { Meta } = Card;



const Ticket = ({film, filmDuration, date, hall, seat, row, cost}) => {

    const getTime = (time) => {
        var ticketTime = moment(time);
        ticketTime.local('ru');
        return ticketTime.format('LT')
    }

    const getDate = (time) => {
        var ticketTime = moment(time);
        ticketTime.local('ru');
        return ticketTime.format('LLLL')
    }

    return(
        <div className='ticket'>
            <Card
                hoverable
                style={{ width: 600 }}
            >
                <Meta title={film}/>
                <div className="ticket__about">
                    <div className="ticket__about-hall">
                        Зал: {hall}
                    </div>
                    <div className="ticket__about-row">
                        Ряд: {row}
                    </div>
                    <div className="ticket__about-seat">
                        Место: {seat}
                    </div>
                    <div className="ticket__about-time">
                        <Steps direction="vertical" progressDot current={2}>
                            <Step title={getTime(+date)} description="Начало фильма."/>
                            <Step title={getTime(+date + +filmDuration)} description="Конец фильма." />
                        </Steps>
                    </div>
                </div>
                <div className="ticket__footer">
                    <div className="ticket__footer-date">
                        {getDate(+date)} {cost} блр. руб.
                    </div>
                    <div className="ticket__footer-cinema">
                        Звезда
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Ticket