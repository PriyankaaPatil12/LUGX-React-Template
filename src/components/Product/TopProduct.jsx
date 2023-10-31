import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

const TopProduct = () => {
  return (
    <>
    <div className="shop-header">
        <Container>
          <Row>
            <Col lg={12}>
              <h1>MODERN WARFARE® II</h1>
              <span>
                <a href="/">Home</a>
                <span className='shop1'> {'>'}
                <a href="/ourshop">Shop</a></span>
                <span className='shop1'> {'>'} Assasin Creed</span>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TopProduct