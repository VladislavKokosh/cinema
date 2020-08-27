import React from 'react'

import { Typography } from 'antd';
import './index.scss'
const { Text, Title } = Typography;


const Footer = () => {
    return (
        <footer className ='footer'>
            <div className ='footer__context'>
                <div className='footer__context-about'>
                    <Title level={5}>Мы всегда готовы вам помочь - звоните или пишите.</Title>
                    <Text strong>8 800 600-30-30</Text>
                </div>
                <Text>© 2003–2020, Звезда</Text>
            </div>
        </footer>
    )
}

export default Footer