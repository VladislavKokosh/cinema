import React, { useEffect, useState } from 'react'

import { Image, List, Typography, Divider } from 'antd'
import './index.scss'
import films from '../../films.json'
import times from '../../time.json'

const { Title, Paragraph } = Typography;

const AboutFilm = (props) => {

    const getFilmById = (id) => {
        const film = [];
        films.map(fFilm => fFilm.id === id ? film+=fFilm : console.log(""))
        return film
    }

    const getTimeById = (id) => {
       const result = times?.filter(time => time.id === id);
       return result
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
        <div className="">

            <div className="about__film">
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
            <div className="-table">
                <Divider orientation="left">Время и дата сеансов</Divider>
                    <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={time}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item.id}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default AboutFilm