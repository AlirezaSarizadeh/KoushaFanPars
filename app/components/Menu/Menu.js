'use client'
import { Button, Offcanvas } from "react-bootstrap";
import React, { useState } from 'react'
import images from "@/app/public/assets/images";
import Image from "next/image";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import './menu.css'
import Link from "next/link";
import { AlignJustify, AlignRight } from "lucide-react";

const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="me-2 p-0 bg-transparent border-0">
                {/* <Image src={images.menuIco} alt="menu-icon" /> */}
                <AlignRight size={32} />
            </button>
            <Offcanvas className="canvas-menu" show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>منو</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Tab.Container defaultActiveKey="tab100">
                        <Row className="h-100">
                            <Col className="pe-0 col-3">
                                <Nav variant="pills" className="flex-column menu justify-content-start menu-pills">
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="tab100" className="btn-transparent"></Nav.Link>
                                    </Nav.Item> */}
                                    <Nav.Item className="menu-nav-item">
                                        <Nav.Link eventKey="tab1">
                                            <Image src={images.productMeniIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="menu-nav-item">
                                        <Nav.Link eventKey="tab2">
                                            <Image src={images.markazAnoozheMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="menu-nav-item">
                                        <Nav.Link eventKey="tab3">
                                            <Image src={images.koushayarMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="menu-nav-item">
                                        <Nav.Link eventKey="tab4">
                                            <Image src={images.blogMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="menu-nav-item">
                                        <Nav.Link eventKey="tab5">
                                            <Image src={images.contactUsMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="menu-nav-item">
                                        <Nav.Link eventKey="tab6">
                                            <Image src={images.aboutUsMenuIcon} alt="icondory" />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col className="ps-0 col-9">
                                <Tab.Content className="menu-tab-content">
                                    <Tab.Pane eventKey="tab100">

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab1">
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                            <Image className="w-100" src={images.menu_item_after} alt="menu-item fter" />
                                        </div>
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>
                                        <div className="menu-item">
                                            <h4 className="mb-0">
                                                محصولات
                                            </h4>
                                        </div>
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
