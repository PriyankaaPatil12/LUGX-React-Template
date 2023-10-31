import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import trendingimg1 from "./../../assets/home/trending-01.jpg";
import trendingimg2 from "./../../assets/home/trending-02.jpg";
import trendingimg3 from "./../../assets/home/trending-03.jpg";
import trendingimg4 from "./../../assets/home/trending-04.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const NavTabs = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const trendingcards = [
    {
      subtitle: 'Action',
      title: 'Assian Creed',
      image: trendingimg1,
      ogprice: 28,
      price: 20,
    },
    {
      subtitle: 'Action',
      title: 'Assian Creed',
      image: trendingimg2,
      price: 44,
    },
    {
      subtitle: 'Action',
      title: 'Assian Creed',
      image: trendingimg3,
      ogprice: 64,
      price: 44,
    },
    {
      subtitle: 'Action',
      title: 'Assian Creed',
      image: trendingimg4,
      price: 32,
    },
  ];


  return (
    <> <div className="nav-tabssection">
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="" className={toggleState === 1 ? "active" : "active1"} onClick={() => toggleTab(1)}>SHOW ALL</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className={toggleState === 2 ? "active" : "active1"} onClick={() => toggleTab(2)}>ADVENTURE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className={toggleState === 3 ? "active" : "active1"} onClick={() => toggleTab(3)}>STRATEGY</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className={toggleState === 4 ? "active" : "active1"} onClick={() => toggleTab(4)}>RACING</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="trending-game">
        <Container>
          <Row className="game1">
            {
              trendingcards.map((elem, ind) => {
                return (
                  <Col md={6} lg={3}>
                    <div key={ind} className="card-box">
                      <div className="image-box">
                        <a href="/productdetails">
                          <img src={elem.image} alt="" />
                        </a>
                        <span className='price-box'>
                          {elem.ogprice && <em className='p1'>${elem.ogprice}</em>}
                          <em>${elem.price}</em>
                        </span>
                      </div>
                      <div className="bottom-content">
                        <div className="left-cont">
                          <span className='spanaction'>{elem.title}</span>
                          <h5>{elem.subtitle}</h5>
                        </div>
                        <div className="right-cont">
                          <a href="/productdetails">
                            <FontAwesomeIcon icon={faBagShopping} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              })
            }

          </Row>

          <Row className='game1'>
            {
              trendingcards.map((elem, ind) => {
                return (
                  <Col md={6} lg={3}>
                    <div key={ind} className="card-box">
                      <div className="image-box">
                        <a href="/productdetails">
                          <img src={elem.image} alt="" />
                        </a>
                        <span className='price-box'>
                          {elem.ogprice && <em className='p1'>${elem.ogprice}</em>}
                          <em>${elem.price}</em>
                        </span>
                      </div>
                      <div className="bottom-content">
                        <div className="left-cont">
                          <span className='spanaction'>{elem.title}</span>
                          <h5>{elem.subtitle}</h5>
                        </div>
                        <div className="right-cont">
                          <a href="/productdetails">
                            <FontAwesomeIcon icon={faBagShopping} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              })
            }

          </Row>
          <Row className='game1'>
            {
              trendingcards.map((elem, ind) => {
                return (
                  <Col md={6} lg={3}>
                    <div key={ind} className="card-box">
                      <div className="image-box">
                        <a href="/productdetails">
                          <img src={elem.image} alt="" />
                        </a>
                        <span className='price-box'>
                          {elem.ogprice && <em className='p1'>${elem.ogprice}</em>}
                          <em>${elem.price}</em>
                        </span>
                      </div>
                      <div className="bottom-content">
                        <div className="left-cont">
                          <span className='spanaction'>{elem.title}</span>
                          <h5>{elem.subtitle}</h5>
                        </div>
                        <div className="right-cont">
                          <a href="/productdetails">
                            <FontAwesomeIcon icon={faBagShopping} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              })
            }

          </Row>
          
        </Container>
      </div>
    </div>


    </>
  )
}

export default NavTabs