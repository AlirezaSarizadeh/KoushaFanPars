'use client';

import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './productDetails.css';
import Title from '../../utils/title/Title';
import FavoriteButton from '../../FavortiteButton/FavoriteButton';
import ShareButton from '../../ShareButton/ShareButton';

const ProductDetails = ({ data }) => {
  const [safeDetail, setSafeDetail] = useState('');
  const [safeTechInfo, setSafeTechInfo] = useState('');

  useEffect(() => {
    setSafeDetail(DOMPurify.sanitize(data.detail || ''));
    setSafeTechInfo(DOMPurify.sanitize(data.tech_info || ''));
  }, [data]);

  return (
    <Container>
      <Row className='align-items-start'>
        <Col className='p-0 p-lg-1 mt-3 my-lg-0'>
          {/* مشخصات محصول */}
          <Card className="post-card">
            <Card.Body>
              <div className="product-actions">
                <FavoriteButton />
                <ShareButton />
              </div>
              <Card.Title className='d-flex align-items-center gap-1'>
                <Title title={'کوره AT-100'} />
                <p className='small mb-0'>
                  دسته بندی :
                  <span> برند KFP </span>
                </p>
              </Card.Title>
              <h6 className='pt-3'>مشخصات</h6>
              <Card.Text
                className='d-flex flex-column gap-1 product-details'
                dangerouslySetInnerHTML={{ __html: safeDetail }}
              />
            </Card.Body>
          </Card>

          {/* اطلاعات فنی */}
          <Card className="post-card">
            <Card.Body>
              <Card.Title className='d-flex align-items-center gap-1'>
                <Title title={'اطلاعات فنی'} />
              </Card.Title>
              <h6 className='pt-3'>مشخصات</h6>
              <Card.Text
                className='d-flex flex-column gap-1'
                dangerouslySetInnerHTML={{ __html: safeTechInfo }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
