import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import product from "../../assets/product/single-game.jpg";

const Prosec2 = () => {
  return (
    <>
    <div className="product-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="left-img">
                <img src={product} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="right-section">
                <h3>Call of Duty®: Modern Warfare® II</h3>
                <span className='pricetag'>
                  <em>$28</em>
                  <span>$22</span>
                </span>
                <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                <div className="inputbtn-box">
                  <input type="text" className='inputsection' placeholder='1' />
                  <button>ADD TO CART</button>
                </div>
                <div className="ul-list">
                  <ListGroup>
                    <ListGroup.Item>Game ID: <span>COD MII</span></ListGroup.Item>
                    <ListGroup.Item>Genre: <span> Action, Team, Single</span></ListGroup.Item>
                    <ListGroup.Item>Multi-tags:<span>War, Battle, Royal</span></ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="line-section"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Prosec2