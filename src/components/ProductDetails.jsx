import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import product from '../assets/product/single-game.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import categories1 from "./../assets/home/categories-01.jpg";
import categories2 from "./../assets/home/categories-05.jpg";
import categories3 from "./../assets/home/categories-03.jpg";
import categories4 from "./../assets/home/categories-04.jpg";
import categories5 from "./../assets/home/categories-05.jpg";
import TopProduct from './Product/TopProduct';


const ProductDetails = () => {
  return (
    <>
      <TopProduct/>
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
      <div className="description-section">
        <Container>
          <div className="content-box">
          <Row>
            <Col lg={12}>
              <div className="info-box">
                <ul>
                  <li className='des'>Description</li>
                  <li className='rev'>Reviews(3)</li>            
                </ul>
              </div>
              <div className="para-box">
                <p>You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
                <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
              </div>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
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
        <div className="flex-box">
          <div className="action-box">
                <h5>Action</h5>
                <div className="action-img">
                  <a href="productdetails">
                    <img src={categories1} alt="" />
                  </a>
                </div>
              </div>
              <div className="action-box">
                <h5>Action</h5>
                <div className="action-img">
                  <a href="productdetails">
                    <img src={categories2} alt="" />
                  </a>
                </div>
              </div>
              <div className="action-box">
                <h5>Action</h5>
                <div className="action-img">
                  <a href="productdetails">
                    <img src={categories3} alt="" />
                  </a>
                </div>
              </div>
              <div className="action-box">
                <h5>Action</h5>
                <div className="action-img">
                  <a href="productdetails">
                    <img src={categories4} alt="" />
                  </a>
                </div>
              </div>
              <div className="action-box">
                <h5>Action</h5>
                <div className="action-img">
                  <a href="productdetails">
                    <img src={categories5} alt="" />
                  </a>
                </div>
              </div>
          </div>  
        </Container>
      </div>
      {/* <div className="footer-section foot">
        <Container>
          <Col lg={12}>
            <p>Copyright © 2048 LUGX Gaming Company. All rights reserved. <a href="/"> Design: TemplateMo</a></p>
          </Col>
        </Container>
      </div> */}
    </>
  )
}

export default ProductDetails;