import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trendingimg1 from "./../../assets/home/trending-01.jpg";
import trendingimg2 from "./../../assets/home/trending-02.jpg";
import trendingimg3 from "./../../assets/home/trending-03.jpg";
import trendingimg4 from "./../../assets/home/trending-04.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Trend = () => {

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
    <>
      <div className="trending-game">
        <Container>
          <Row className='trend'>
            <Col lg={6}>
              <div className="new-head">
                <h5>TRENDING</h5>
                <h2>Trending Games</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="view-btn">
                <a href="/ourshop">View All</a>
              </div>
            </Col>
          </Row>
          <Row>

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
                          <span className='spanaction'>{elem.subtitle}</span>
                          <h5>{elem.title}</h5>
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
    </>
  )
}

export default Trend;