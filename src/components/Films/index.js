import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Film from '../Film'
import { getFilmsAsync } from '../../store/actions/films'
import './index.scss'
import Loader from '../Loader'

const Films = () => {

    const dispatch = useDispatch();
    const films = useSelector(state => state.films.films)
    const isLoading = useSelector(state => state.loading.isLoading)
    useEffect(()=> {
        dispatch(getFilmsAsync())
    }, [])

    return(
        isLoading ?
            <Loader/> :
            <div className='films'>
                {films?.map((film, index) => <Film film={film} key={index}/>)}
            </div>
    )
}

export default Films