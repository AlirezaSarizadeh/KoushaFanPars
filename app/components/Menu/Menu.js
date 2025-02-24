'use client'
import { Button, Offcanvas } from "react-bootstrap";
import React, { useState } from 'react'
import images from "@/app/public/assets/images";
import Image from "next/image";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import './menu.css'

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
                    <Tab.Container defaultActiveKey="tab1">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab1">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab3">Tab 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab1">
                                        <h4>Tab 1 Content</h4>
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
