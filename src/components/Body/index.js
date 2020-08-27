import React from 'react'
import Header from '../Header/index'
import { Typography, Button } from 'antd';
import './index.scss'

const { Title } = Typography;


const Body = () => {
    return (
        <div className='main'>
            <Header></Header>
            <div className='main__order'>
                    <Title className='main__order-title'>Заказать билет онлайн.</Title>
                    <Button className='main__order-button' size="large">
                        Заказать билет.
                    </Button>
            </div>
        </div>
    )
}

export default Body