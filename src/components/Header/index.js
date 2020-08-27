import React, { useState } from 'react'

import { PageHeader, Button } from 'antd';
import './index.scss';

const Header = (props) => {
    return(
        <PageHeader
            style={{backgroundColor: 'white'}}
            avatar={{ src: 'https://w7.pngwing.com/pngs/24/982/png-transparent-cinema-film-music-computer-icons-actor.png' }}
            className='header'
            title='Кинотеатр "Звезда"'
            subTitle='Приходи к нам, будем рады!'
            extra={[
                <Button 
                    key="1"
                    type="primary"
                >
                    Sign Up
                </Button>,
                <Button
                    key="2"
                    onClick={() => this.props.setAuthorization(true)}
                >
                    Log In
                </Button>
            ]}
        />
    )
}

export default Header