import React from 'react'

import Film from '../Film'
import films from '../../db/films.json'
import './index.scss'

const Films = () => {

    return(
        <div className='films'>
            {films.map((film, index) => <Film film={film} key={index}/>)}
        </div>
    )
}

export default Films
