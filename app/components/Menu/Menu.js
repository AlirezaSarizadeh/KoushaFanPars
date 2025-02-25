'use client'
import { Button, Offcanvas } from "react-bootstrap";
import React, { useState } from 'react'
import images from "@/app/public/assets/images";
import Image from "next/image";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import './menu.css'
import Link from "next/link";

const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="me-2 p-0 bg-transparent border-0">
                <Image src={images.menuIco} alt="menu-icon" />
            </button>
            <Offcanvas className="canvas-menu" show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>منو</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Tab.Container defaultActiveKey="tab100">
                        <Row className="h-100">
                            <Col sm={3} className="pe-0">
                                <Nav variant="pills" className="flex-column menu">
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="tab100" className="btn-transparent"></Nav.Link>
                                    </Nav.Item> */}
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab1">
                                            <Image src={images.productMeniIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab2">
                                            <Image src={images.markazAnoozheMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab3">
                                            <Image src={images.koushayarMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab4">
                                            <Image src={images.blogMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab5">
                                            <Image src={images.contactUsMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab6">
                                            <Image src={images.aboutUsMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} className="ps-0">
                                <Tab.Content className="menu-tab-content">
                                    <Tab.Pane eventKey="tab100">
                                        <h4 className="mb-0">
                                            محصولات
                                        </h4>
                                        <h4 className="mb-0">
                                            محصولات
                                        </h4>
                                        <h4 className="mb-0">
                                            محصولات
                                        </h4>
                                        <h4 className="mb-0">
                                            محصولات
                                        </h4>
                                        <h4 className="mb-0">
                                            محصولات
                                        </h4>
                                        <h4 className="mb-0">
                                            محصولات
                                        </h4>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab1">
                                        <h4 className="menu-tab-content-header">محصولات</h4>
                                        <p>This is the content for Tab 1.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                        <h4>Tab 2 Content</h4>
                                        <p>This is the content for Tab 2.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab3">
                                        <h4>Tab 3 Content</h4>
                                        <p>This is the content for Tab 3.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Menu
