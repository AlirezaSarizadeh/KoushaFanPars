'use client'
import images from '@/app/public/assets/images';
import Image from 'next/image';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './searchmodal.css'

const SearchModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='search-modal'
            >
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <div className="input-with-icon-left d-flex align-items-center search-modal-input position-relative">
                                <div className="input-icon">
                                    <Image alt='' src={images.searchModalBtnIcon} />
                                </div>
                                <Form.Control
                                    as="input"
                                    size="lg"
                                    placeholder="عبارت خود را جستجو کنید"
                                    className='border-0'
                                ></Form.Control>
                                <button className="arrowSearchModalIcon border-0">
                                    <Image alt='' src={images.arrowSearchModalIcon} />
                                </button>
                            </div>
                        </Form.Group>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

function SearchModalBtn() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className='search-btn bg-transparent border-0' onClick={() => setModalShow(true)}>
                <Image src={images.searchBtnIcon} alt='seach_Icon' style={{ transform: 'scale(0.6)' }} />
            </button>

            <SearchModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default SearchModalBtn
