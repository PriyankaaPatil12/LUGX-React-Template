import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewsletterComp = () => {
  return (
    <>
        
      <div className="bottom-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="our-shop">
                <Row>
                  <Col lg={12}>
                    <div className="shop-head">
                      <h6>OUR SHOP</h6>
                      <h1>Go Pre-Order Buy & Get Best <span>Prices</span> For You!</h1>
                    </div>
                    <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                    <div className="shop-button">
                      <a href="ourshop">SHOP NOW</a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="our-shop newsletter">
                <Row>
                  <Col lg={12}>
                    <div className="shop-head">
                      <h6>NEWSLETTER</h6>
                      <h1>Get Up To $100 Off Just Buy <span>Subscribe</span> Newsletter!</h1>
                    </div>
                    <div className="search-box">
                      <input type="text" placeholder='Your email..' />
                      <button className='input-btn1'>SUBSCRIBE NOW</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default NewsletterComp;