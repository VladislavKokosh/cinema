import React from 'react'

import { Scrollbars } from 'react-custom-scrollbars';
import Film from '../Film'
import films from '../../db/films.json'
import './index.scss'

const Films = () => {

    return(
        <Scrollbars>
            <div className='films'>
                {films.map((film, index) => <Film film={film} key={index}/>)}
            </div>
        </Scrollbars>
    )
}

export default Films
