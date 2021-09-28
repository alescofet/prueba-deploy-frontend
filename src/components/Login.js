// import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';
// import { useEffect } from 'react'
import { useState } from 'react';


export default function Login(props) {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const authService = new AuthService();

    const handleFormSubmit = e => {
        e.preventDefault();


        authService
            .login(email, pwd)
            .then(loggedUser => {

                console.log(loggedUser)
                // storeUser(loggedUser.data);
                // showAlert(
                //     `Welcome ${loggedUser.data.name
                //     }! loading... ${loggedUser.data.role.toUpperCase()} config`
                // );
                // setLoginModal(false);
                // history.push('/');
            })
            .catch(err => {
                // showAlert('Something went wrong! Retry to logg in')
                // setwrongUser(true);
                console.log(err);
            });
    };

    return (
        <Container>
            <h1>LOGIN</h1>
            <Row>
                <Col md={{ span: 10, offset: 1 }} className={'pb-4'}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                name="email"
                            />

                        </Form.Group>

                        <Form.Group controlId="pwd">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                                name="pwd"
                            />
                        </Form.Group>

                        <Button
                            style={{ marginTop: '20px', width: '100%' }}
                            bsPrefix="btn-flat"
                            variant="primary"
                            type="submit"
                        >
                            Login
                        </Button>
                    </Form>

                    <hr />

                    <Button
                        bsPrefix="btn-flat"
                        variant="primary"
                        style={{ marginTop: '20px', width: '100%' }}
                        onClick={() => { }}
                    >
                        Cancel
                    </Button>

                    <hr />


                    <p align="center">
                        <small>
                            If you have not yet registered you can do so by clicking on the
                            following link:{' '}
                            <Link to="/signup/n" onClick={() => { }}>
                                {' '}
                                I'm not registered yet.{' '}
                            </Link>
                        </small>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
