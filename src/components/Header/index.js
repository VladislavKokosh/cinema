import React, { useState, useEffect } from 'react'

import { PageHeader, Button, Modal, Form, Input, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

const Header = (props) => {

    const [clickLogin, setClickLogin] = useState(false);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [autorization, setAutorization] = useState(false);
    const [users, setUsers] = useState([
        {
            login: '123',
            pass: '123'
        },
        {
            login: 'admin',
            pass: 'admin'
        }
    ]);

    useEffect(() =>
        setAutorization(localStorage.getItem('autorization'))
    , [])

    const сheckUsers = () => {
        const autorizationUser = users.find(user =>
            user.login === login && user.pass === pass);

        if (autorizationUser) {
            localStorage.setItem('autorization', true);
            setAutorization(true)
            setClickLogin(false);
        } else {
            localStorage.setItem('autorization', false);
            setAutorization(false);
        }
    }

    return(
        <>
            <PageHeader
                style={{backgroundColor: 'white'}}
                avatar={{ src: 'https://w7.pngwing.com/pngs/24/982/png-transparent-cinema-film-music-computer-icons-actor.png' }}
                className='header'
                title='Кинотеатр "Звезда"'
                subTitle='Приходи к нам, будем рады!'
                extra={
                    !autorization
                    ? <Button
                        key="2"
                        onClick={() => setClickLogin(true)}
                        >
                            Log In
                        </Button>
                    : <Button
                        key="3"
                        onClick={() => {
                            setAutorization(false);
                            localStorage.removeItem('autorization');
                        }}
                        >
                        Log Out
                        </Button>
                }
            />
            <Modal
                visible={clickLogin}
                title="Log in"
                onCancel={() => setClickLogin(false)}
                footer={null}
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                            onChange={e => setLogin(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            onChange={e => setPass(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={() => сheckUsers()} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                            Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Header