import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { PageHeader, Button } from 'antd';

import ModalLogin from '../ModalLogin'
import ModalRegistration from '../ModalRegistration';

import { showLoginModal, showRegistrModal } from '../../store/actions/modal'

import './index.scss';
import { logoutUserAsync } from '../../store/actions/users';


const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)
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
                    !user
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
                            dispatch(logoutUserAsync()) 
                        }}
                        >
                        Выйти
                        </Button>
                }
            />
            <ModalLogin/>
            <ModalRegistration/>
        </>
    )
}

export default Header
