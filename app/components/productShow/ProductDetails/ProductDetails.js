'use client'
import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './productDetails.css'; // For custom CSS if needed
import Title from '../../utils/title/Title';
import FavoriteButton from '../../FavortiteButton/FavoriteButton';
import ShareButton from '../../ShareButton/ShareButton';
import ProductReviews from '../../ProductReviews/ProductReviews';


const ProductDetails = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShareClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row className='align-items-start'>
        <Col className='p-0 p-lg-1 mt-3 my-lg-0'>
          <Card className="post-card">
            <Card.Body>
              <div className="product-actions">
                <FavoriteButton />
                {/* <span>AT100</span> */}
                <ShareButton />
              </div>
              <Card.Title className='d-flex align-items-center gap-1'>
                <Title title={'کوره AT-100'} />
                <p className='small mb-0'>
                  دسته بندی :
                  <span>
                    برند KFP
                  </span>
                </p>
              </Card.Title>
              <h6 className='pt-3'>
                مشخصات
              </h6>
              <Card.Text className='d-flex flex-column gap-1 product-details'>
                <span className='mt-2'>
                  -
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </span>
                <span className='mt-2'>
                  -

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </span>
                <span className='mt-2'>
                  -
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </span>
                <span className='mt-2'>
                  -
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </span>
                <span className='mt-2'>
                  -
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* مشخصات فنی  */}
          <Card className="post-card">
            <Card.Body>
              <Card.Title className='d-flex align-items-center gap-1'>
                <Title title={'اطلاعات فنی'} />
              </Card.Title>
              <h6 className='pt-3'>
                مشخصات
              </h6>
              <Card.Text className='d-flex flex-column gap-1'>
                <span className='mt-2'>
                  <b>
                    ابعاد :
                  </b>
                  37 سانتی متر(عرض)* 39 سانتی متر(طول)* 54 سانتی متر(ارتفاع)
                </span>
                <span className='mt-2'>
                  <b>
                    ابعاد :
                  </b>
                  37 سانتی متر(عرض)* 39 سانتی متر(طول)* 54 سانتی متر(ارتفاع)
                </span>
                <span className='mt-2'>
                  <b>
                    ابعاد :
                  </b>
                  37 سانتی متر(عرض)* 39 سانتی متر(طول)* 54 سانتی متر(ارتفاع)
                </span>
                <span className='mt-2'>
                  <b>
                    ابعاد :
                  </b>
                  37 سانتی متر(عرض)* 39 سانتی متر(طول)* 54 سانتی متر(ارتفاع)
                </span>
                <span className='mt-2'>
                  <b>
                    ابعاد :
                  </b>
                  37 سانتی متر(عرض)* 39 سانتی متر(طول)* 54 سانتی متر(ارتفاع)
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;