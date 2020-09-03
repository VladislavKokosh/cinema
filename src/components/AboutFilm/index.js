import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/ru'

import { Image, List, Typography, Divider, Button } from 'antd'
import './index.scss'
import films from '../../films.json'
import times from '../../time.json'

const { Title, Paragraph } = Typography;

const AboutFilm = (props) => {

    const getFilmById = (id) => {
        const film = films.find(film =>
            film.id === id);
        return film
    }

    const getTimeById = (id) => {
       const result = times.filter(time => time.id === id);
       return result
    }

    const getTime = (time) => {
        var ticketTime = moment(time);
        ticketTime.local('ru');
        return ticketTime.format('LLLL')
    }

    const [film, setFilm] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(()=> {
        setFilm(getFilmById(props.match.params.id))
    }, [])

    useEffect(()=> {
        setTime(getTimeById(props.match.params.id))
    }, [])

    return(
        <div className="about">

            <div className="__film">
                <div className="-image">
                    <Image
                        width={270}
                        src={film?.cover}
                    />
                </div>
                <div className="-text">
                    <Typography>
                        <Title>{film?.name}</Title>
                        <Paragraph>
                            {film?.about}
                        </Paragraph>
                    </Typography>
                </div>
            </div>
            <div className="__table">
                <Divider orientation="left">Время и дата фильма</Divider>
                    <List
                    bordered
                    dataSource={times}
                    renderItem={item => (
                        <List.Item>
                            <Title level={3}>{item.hall == 1 ? 'Большой зал' : 'Малый зал'}</Title>
                            {getTime(+item.date)}
                            <Button className='-ticket-button'>Заказать</Button>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default AboutFilm