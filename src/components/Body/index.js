import React, { useState} from 'react'

import Header from '../Header/index'
import Footer from '../Footer';
import { Typography, Button, Modal } from 'antd';

import './index.scss'

const { Title } = Typography;

const Body = () => {

    const [visibleModal, setVisibleModal] = useState(false);
    const [authorization, setAuthorization] = useState(false);

    return (
        <div className='main'>
            <Header setAuthorization={setAuthorization}></Header>
            <div className='main__order'>
                    <Title
                        className='main__order-title'>
                        Заказать билет онлайн.
                    </Title>
                    <Button
                        className='main__order-button'
                        size="large"
                        onClick={() => authorization ? console.log("okey") : setVisibleModal(true) }
                        >
                        Заказать билет.
                    </Button>
                    <Modal
                        title="Ошибка авторизации"
                        visible={visibleModal}
                        onOk={() => setVisibleModal(false)}
                        onCancel={() => setVisibleModal(false)}
                        >
                        <p>Для того, чтобы заказать билет, вам нужно авторизоваться. Сделать это можно в верхнем меню.</p>
                    </Modal>
            </div>
            <Footer className='main__footer'></Footer>
        </div>
    )
}

export default Body