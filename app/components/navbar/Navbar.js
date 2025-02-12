'use client'
import { Button, Offcanvas } from "react-bootstrap";
import React, { useState } from 'react'
import { Menu as MenuIcon } from "lucide-react";


const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="transparent" onClick={handleShow} className="me-2">
                <MenuIcon color="#333"/>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>منو</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Navbar
