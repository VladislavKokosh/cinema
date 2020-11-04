import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Form,
    Input,
    Button,
    Modal
  } from 'antd';
import { hideRegistrModal } from '../../store/actions/modal';
import { signUpUserAsync } from '../../store/actions/users';

const ModalRegistration = () => {
    const dispatch = useDispatch()
    const visibleModal = useSelector(state => state.modal.visibleRegistrModal)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const rigistrClick = () => {
        const user = {
            login: login,
            password: password
        }
        dispatch(signUpUserAsync(user))
    }

    return(
        <Modal
            visible={visibleModal}
            title='Регистрация'
            onCancel={() => dispatch(hideRegistrModal())}
            footer={null}
        >
            <Form
                name='normal_login'
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="email"
                    label="Почта"
                    rules={[
                    {
                        type: 'email',
                        message: 'Введите валидную почту!',
                    },
                    {
                        required: true,
                        message: 'Введите вашу почту!',
                    },
                    ]}
                >
                    <Input onChange={e => setLogin(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                    {
                        required: true,
                        message: 'Введите ваш пароль!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password onChange={e => setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => rigistrClick()}
                    >
                    Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalRegistration