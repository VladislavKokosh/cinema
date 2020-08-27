import React from 'react'

import { Typography, Button } from 'antd';
import './index.scss'

const { Title } = Typography;


const Body = () => {
    return (
        <div className='body'>
            <div className='order'>
                <div сlassName='context'>
                    <Title className='title'>Заказать билет онлайн.</Title>
                    <Button size="large">
                        Заказать билет.
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Body