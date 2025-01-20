import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

const LockScreen = () => {
    return (
        <Fragment >
            <Seo title="Lock-Screen" />
            <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                    <div className="my-4 d-flex justify-content-center">
                        <Link href="/components/dashboard/dashboard">
                            <img src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" />
                        </Link>
                    </div>
                    <Card className="custom-card">
                        <Card.Body className="p-5">
                            <p className="h5 fw-semibold mb-2 text-center">Lock Screen</p>
                            <p className="mb-3 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                            <div className="text-center mb-3">
                                <div className="lh-1 mb-2">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <img src="../../../assets/images/faces/15.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
                                </div>
                            </div>
                            <div className="row gy-3">
                                <Col xl={12} className="mb-2">
                                    <Form.Label htmlFor="lockscreen-password" className="text-default">Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="password" className="form-control-lg" id="lockscreen-password" placeholder="password" />
                                        <Button variant='light' aria-label="button" className="btn" type="button" id="button-addon2"><i className="ri-eye-off-line align-middle"></i></Button>
                                    </InputGroup>
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                            <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                Remember password ?
                                            </Form.Label>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12} className="d-grid mt-2">
                                    <Link href="/components/dashboard/dashboard" className="btn btn-lg btn-primary">Unlock</Link>
                                </Col>
                            </div>
                            <div className="text-center">
                                <p className="text-muted mt-3 mb-0">Try unlock with different methods <Link className="text-success" href="#!"><u>Finger print</u></Link> / <a className="text-success" href="#!"><u>Face Id</u></a></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
LockScreen.layout = "Authenticationlayout";

export default LockScreen;
