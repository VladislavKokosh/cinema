import React, { useState } from 'react'

import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoginModal } from '../../store/actions/modal';
import { loginUserAsync } from '../../store/actions/users';

const ModalLogin = () => {
    const dispatch = useDispatch()
    const visibleModal = useSelector(state => state.modal.visibleLoginModal)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginClick = () => {
        const user = {
            login: login,
            password: password
        }
        dispatch(loginUserAsync(user))
    }

    return(
        <Modal
            visible={visibleModal}
            title='Вход'
            onCancel={() => dispatch(hideLoginModal())}
            footer={null}
        >
            <Form
                name='normal_login'
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name='username'
                    rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder='Логин'
                        onChange={e => setLogin(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type='password'
                        placeholder='Пароль'
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="login-form-button"
                        type='primary'
                        htmlType='submit'
                        onClick={() => loginClick()}
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalLogin