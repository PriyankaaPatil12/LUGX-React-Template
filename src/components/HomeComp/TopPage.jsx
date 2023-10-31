import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firstimg from "./../../assets/home/banner-image.jpg";

const TopPage = () => {
  return (
    <>
       <div className='banner1'>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="leftbox">
                <h4>Welcome To LUGX</h4>
                <h1 >BEST GAMING SITE EVER!</h1>
                <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                <div className="search-box">
                  <input type="text" placeholder='Type Something' />
                  <button className='input-btn'>SEARCH NOW</button>
                </div>
              </div>

            </Col>
            <Col lg={6}>
              <div className="right-box">
                <img src={firstimg} alt="" />
                <span className='right-price'>$22</span>
                <span className='right-offer'>-40%</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TopPage;