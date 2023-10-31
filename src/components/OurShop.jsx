import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import trendingimg1 from "./../assets/home/trending-01.jpg";
import trendingimg2 from "./../assets/home/trending-02.jpg";
import trendingimg3 from "./../assets/home/trending-03.jpg";
import trendingimg4 from "./../assets/home/trending-04.jpg";
import Pagination from 'react-bootstrap/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


export const OurShop = () => {
  return (
    <>
      <div className="shop-header">
        <Container>
          <Row>
            <Col lg={12}>
              <h1>OUR SHOP</h1>
              <span>
                <a href="/">Home</a>
                <span className='shop1'> {'>'}  Our Shop</span>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="nav-tabssection">
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link href="" className='active active1'>SHOW ALL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className='active1'>ADVENTURE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className='active1'>STRATEGY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className='active1'>RACING</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="trending-game">
          <Container>
            <Row className='game1'>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg1} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$36</em><br />
                      $24
                    </span>
                  </div>
                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg2} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$32</em><br />
                      $22
                    </span>
                  </div>

                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg3} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$45</em><br />
                      $30
                    </span>
                  </div>

                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg4} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$32</em><br />
                      $22
                    </span>
                  </div>
                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='game1'>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg3} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$38</em><br />
                      $26
                    </span>
                  </div>
                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg1} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$30</em><br />
                      $20
                    </span>
                  </div>

                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg4} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$32</em><br />
                      $22
                    </span>
                  </div>

                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg2} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$32</em><br />
                      $22
                    </span>
                  </div>
                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg3} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$28</em><br />
                      $20
                    </span>
                  </div>
                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg4} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$26</em><br />
                      $18
                    </span>
                  </div>

                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg1} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$32</em><br />
                      $24
                    </span>
                  </div>

                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="card-box">
                  <div className="image-box">
                    <a href="/productdetails">
                      <img src={trendingimg2} alt="" />
                    </a>
                    <span className='price-box'>
                      <em className='p1'>$45</em><br />
                      $30
                    </span>
                  </div>
                  <div className="bottom-content">
                    <div className="left-cont">
                      <span className='spanaction'>Action</span>
                      <h5>Assasin Creed</h5>
                    </div>
                    <div className="right-cont">
                      <a href="/productdetails">
                        <FontAwesomeIcon icon={faBagShopping} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="pagination-section">
        <Container>
          <Row>
            <Col lg={12}>
              <Pagination className="justify-content-center">
                <Pagination.Prev className='page1' />
                <Pagination.Item className='page1'>{1}</Pagination.Item>
                <Pagination.Item className='page1 page2' active>{2}</Pagination.Item>
                <Pagination.Item className='page1'>{3}</Pagination.Item>
                <Pagination.Next className='page1' />
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurShop;
