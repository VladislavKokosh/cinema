import React, { useState } from 'react'

import { Modal, Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoginModal } from '../../store/actions/modal';

const ModalLogin = () => {
    const dispatch = useDispatch()
    const visibleModal = useSelector(state => state.modal.visibleLoginModal)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginClick = () => {

    }

    return(
        <Modal
            visible={visibleModal}
            title='Log in'
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
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder='Username'
                        onChange={e => setLogin(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type='password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="as">
                        Forgot password
                    </a>
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