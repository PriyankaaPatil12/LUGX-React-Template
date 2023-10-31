import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import CategoriesComp from '../HomeComp/CategoriesComp';

const ActionPro = () => {
  return (
    <>
    <div className="action-catgories">
        <Container>
        <Row className='trend related'>
            <Col lg={6}>
              <div className="new-head top-game">
                <h5>ACTION</h5>
                <h2>Related Games</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="view-btn">
                <a href="/ourshop">View All</a>
              </div>
            </Col>
          </Row>
        <CategoriesComp/>
        </Container>
      </div>
    </>
  )
}

export default ActionPro