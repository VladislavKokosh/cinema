import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { PageHeader, Button } from 'antd';

import ModalLogin from '../ModalLogin'
import ModalRegistration from '../ModalRegistration';

import { showLoginModal, showRegistrModal } from '../../store/actions/modal'

import './index.scss';


const Header = () => {
    const dispatch = useDispatch()
    const [autorization, setAutorization] = useState(false);

    useEffect(() => {
        setAutorization(localStorage.getItem('autorization'))
    },[])

    const openModalLogin = () => {
        dispatch(showLoginModal())
    }

    const openMoadlRegistr = () => {
        dispatch(showRegistrModal())
    }

    return (
        <>
            <PageHeader
                style={{backgroundColor: 'white', boxShadow: '1px 1px 10px rgba(0,0,0,0.6)'}}
                avatar={{ src: 'https://w7.pngwing.com/pngs/24/982/png-transparent-cinema-film-music-computer-icons-actor.png' }}
                className="header"
                title='Кинотеатр "Звезда"'
                subTitle='Приходи к нам, будем рады!'
                extra={
                    !autorization
                    ? <div>
                        <Button
                            key='1'
                            onClick={() => {openModalLogin()}}
                            style={{marginRight: '20px'}}
                        >
                            Войти
                        </Button>
                        <Button
                            key='2'
                            onClick={() => {openMoadlRegistr()}}
                        >
                            Зарегистрироваться
                        </Button>
                    </div>
                    : <Button
                        key='3'
                        onClick={() => {
                            setAutorization(false);
                            localStorage.removeItem('autorization');
                        }}
                        >
                        Log Out
                        </Button>
                }
            />
            <ModalLogin/>
            <ModalRegistration/>
        </>
    )
}

export default Header
