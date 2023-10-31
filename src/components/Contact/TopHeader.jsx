import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
const TopHeader = () => {
  return (
    <>
     <div className="contact-header">
        <div className="shop-header">
          <Container>
            <Row>
              <Col lg={12}>
                <h1>CONTACT US</h1>
                <span>
                  <a href="/">Home</a>
                  <span className='shop1'> {'>'} Contact Us</span>
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default TopHeader