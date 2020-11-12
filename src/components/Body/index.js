import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Typography, Button, message } from 'antd';

import './index.scss'

const { Title } = Typography;

const Body = () => {

    const user = useSelector(state => state.users.user)

    const checkAutorization = () => {
        !user ?  message.error('Сначала авторизуйтесь!') : console.log();
    }

    return (
        <div className='body'>
            <div className='body__order'>
                <Title className='body__order-title'>
                    Заказать билет онлайн.
                </Title>
                <Link to={`${user ? '/films':'/'}`}>
                    <Button
                        className='body__order-button'
                        size="large"
                        onClick={() => checkAutorization() }
                    >
                        Заказать билет.
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Body
