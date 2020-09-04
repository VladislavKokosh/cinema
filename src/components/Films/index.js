import React, { useState } from 'react'

import Film from '../Film'
import './index.scss'
import films from '../../db/films.json'

const Films = () => {

return(
    <div className='films'>
        {films.map((film, index) => <Film film={film} key={index}/>)}
    </div>
)}

export default Films