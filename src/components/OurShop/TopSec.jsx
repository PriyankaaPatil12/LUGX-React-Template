import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import CommonHead from '../Common/CommonHead';

const TopSec = () => {
  return (
    <>
     <div className="shop-header">
        <Container>
          <Row>
            <Col lg={12}>
              <h1>OUR SHOP</h1>
              <span>
                <a href="/">Home</a>
                <a className='shop1'> {'>'}  Our Shop</a>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TopSec;