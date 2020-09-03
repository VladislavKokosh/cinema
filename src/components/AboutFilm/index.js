import React, { useEffect, useState } from 'react'

import { Image, Typography } from 'antd'
import './index.scss'
import films from '../../films.json'

const { Title, Paragraph } = Typography;

const AboutFilm = (props) => {

    const getFilmById = (id) => {
        const film = films.find(film =>
            film.id === id);
        return film
    }

    const [film, setFilm] = useState(null)

    useEffect(()=> {
        setFilm(getFilmById(props.match.params.id))
    }, [])
    console.log(film)

    return(
        <div className="">
            <div className="about__film">
                <div className="-image">
                    <Image
                        width={200}
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

            </div>
        </div>
    )
}

export default AboutFilm