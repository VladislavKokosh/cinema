import React, { useState, useEffect  } from 'react'

import { Typography, Button, Modal } from 'antd';

import './index.scss'

const { Title } = Typography;

const Body = () => {

const [visibleModal, setVisibleModal] = useState(false);
const [authorization, setAuthorization] = useState(true);

useEffect(() => {
    authorization ? console.log('Авторизован') : console.log('Неавторизован')
});

return (
    <div className='body'>
        <div className='body__order'>
            <Title
                className='body__order-title'
            >
                Заказать билет онлайн.
            </Title>
            <Button
                className='body__order-button'
                size="large"
                onClick={() => {
                    setAuthorization(localStorage.getItem('autorization'))
                }}
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
    </div>
)}

export default Body
