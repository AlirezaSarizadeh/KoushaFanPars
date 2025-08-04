'use client'
import { Button, Offcanvas, Spinner } from "react-bootstrap";
import React, { useState } from 'react';
import images from "@/app/public/assets/images";
import Image from "next/image";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import './menu.css';
import Link from "next/link";
import { AlignRight } from "lucide-react";

const Menu = ({ menuData }) => {
    const [show, setShow] = useState(false);
    const [subMenu, setSubMenu] = useState([]);
    const [activeTab, setActiveTab] = useState("tab100");
    const [isLoading, setIsLoading] = useState(false); // 👈 New loading state

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchSubMenu = async (parentId) => {
        try {
            setIsLoading(true); // 👈 Start loading
            const formData = new FormData();
            formData.append("parent_id", parentId);

            const response = await fetch("https://api.kfp-dental.com/api/menu", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setSubMenu(data);
        } catch (error) {
            console.error("Error fetching submenu:", error);
        } finally {
            setIsLoading(false); // 👈 Stop loading
        }
    };

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);

        const key = String(eventKey);
        if (key.startsWith("tab")) {
            const id = key.replace("tab", "");
            fetchSubMenu(id);
        }
    };

    return (
        <>
            <button onClick={handleShow} className="me-2 p-0 bg-transparent border-0">
                <AlignRight size={32} />
            </button>

            <Offcanvas className="canvas-menu" show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <Tab.Container defaultActiveKey="tab100" onSelect={handleSelect}>
                        <Row className="h-100">
                            <Col className="pe-0 col-3">
                                <Nav variant="pills" className="flex-column menu justify-content-start menu-pills">
                                    {menuData.map(item => (
                                        <Nav.Item key={item.id} className="menu-nav-item">
                                            <Nav.Link eventKey={`tab${item.id}`}>
                                                <img src={item.image} alt={item.title} />
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>
                            <Col className="ps-0 col-9">
                                <Tab.Content className="menu-tab-content">
                                    <Tab.Pane eventKey="tab100">
                                        {menuData.map(item => (
                                            <div className="menu-item" key={item.id}>
                                                <h4 className="mb-0">{item.title}</h4>
                                            </div>
                                        ))}
                                    </Tab.Pane>

                                    {menuData.map(item => (
                                        <Tab.Pane key={`tab${item.id}`} eventKey={`tab${item.id}`}>
                                            <div className="menu-nav-item">
                                                <h4 className="mb-0">{item.title}</h4>
                                                <Image className="w-100" src={images.menu_item_after} alt="menu-item after" />
                                            </div>

                                            {isLoading ? (
                                                <div className="text-center my-3">
                                                    <Spinner animation="border" variant="primary" />
                                                    <p className="text-muted mt-2">در حال بارگذاری...</p>
                                                </div>
                                            ) : subMenu.length > 0 ? (
                                                subMenu.map(sub => (
                                                    <div className="menu-item" key={sub.id}>
                                                        <Link className="fs-4" href={sub.link}>
                                                            {sub.title}
                                                        </Link>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-muted">زیر دسته‌ای موجود نیست.</p>
                                            )}
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Menu;
