'use client'
import { Button, Offcanvas } from "react-bootstrap";
import React, { useState } from 'react'
import images from "@/app/public/assets/images";
import Image from "next/image";


const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="me-2 p-0 bg-transparent border-0">
                <Image src={images.menuIco} alt="menu-icon" />
            </button>
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
