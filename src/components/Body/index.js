import React from 'react'

import { Typography } from 'antd';
import './index.scss'

const { Title } = Typography;


const Body = () => {
    return (
        <div className='body' style={{filter: 'blur(5px)'}}>
            <div className='title'>
                <Title>Заказать билет онлайн.</Title>
            </div>
        </div>
    )
}

export default Body