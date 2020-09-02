import React, { useState } from 'react'

import Film from '../Film'
import './index.scss'

const Films = () => {
const [films, setFilms] = useState([
    {
        name: 'Джентльмены',
        cover: '//avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/300x450'
    },
    {
        name: 'Зависнуть в Палм-Спрингс',
        cover: '//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4c5e3735-0867-4994-869f-8403f02e9239/300x450'
    },
    {
        name: 'Калашников',
        cover: '//avatars.mds.yandex.net/get-kinopoisk-image/1600647/e57191a7-61b5-4dfe-a50e-2eabb5b4f142/300x450'
    },
    {
        name: 'Пушки Акимбо',
        cover: '//avatars.mds.yandex.net/get-kinopoisk-image/1600647/e56fd0c1-5840-43e0-aef9-3f21dc99fa0d/300x450'
    },
    {
        name: 'Темные воды',
        cover: '//avatars.mds.yandex.net/get-kinopoisk-image/1599028/ea788ce3-1651-4f2b-a0b3-5a3dee2ec496/300x450'
    }
])
return(
    <div className='films'>
        {films.map((film, index) => <Film film={film} key={index}/>)}
    </div>
)}

export default Films