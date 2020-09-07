import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import moment from 'moment'
import 'moment/locale/ru'

import { Image, List, Typography, Divider, Button } from 'antd'
import './index.scss'
import sessions from '../../db/session.json'
import films from '../../db/films.json'

const { Title, Paragraph } = Typography;

const AboutFilm = (props) => {

    const getTime = (time) => {
        var ticketTime = moment(time);
        ticketTime.local('ru');
        return ticketTime.format('LLLL')
    }

    const [film, setFilm] = useState(null);
    const [session, setSession] = useState(null);

    useEffect(()=> {
        const getFilmById = (id) => {
            const film = films.find(film =>
                film.id === id);
            return film
        }

        setFilm(getFilmById(props.match.params.id))
    }, [])

    useEffect(()=> {
        const getSessionById = (id) => {
            const result = sessions.filter(session => session.id_film === id);
            return result
        }

        setSession(getSessionById(props.match.params.id))
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
                    dataSource={session?.length && session}
                    renderItem={item => (
                        <List.Item>
                            <Title level={3}>{item.hall == 1 ? 'Большой зал' : 'Малый зал'}</Title>
                            {getTime(+item.date)}
                            <Link to={`/hall/${item.id}`}>
                                <Button className='-ticket-button'>Заказать</Button>
                            </Link>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default AboutFilm