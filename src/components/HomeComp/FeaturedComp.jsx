import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import featured1 from "./../../assets/home/featured-01.png";
import featured2 from "./../../assets/home/featured-02.png";
import featured3 from "./../../assets/home/featured-03.png";
import featured4 from "./../../assets/home/featured-04.png";


const FeaturedComp = () => {
  return (
    <>
      <div className="bottom-box">
        <Container>
          <Row>
            <Col md={6} lg={3}>
              <a href="/">
                <div className="inner-box">
                  <div className="inner-img">
                    <img src={featured1} alt="" />
                  </div>
                  <h5>FREE STORAGE</h5>
                </div>
              </a>
            </Col>
            <Col md={6} lg={3}>
              <a href="/">
                <div className="inner-box">
                  <div className="inner-img">
                    <img src={featured2} alt="" />
                  </div>
                  <h5>USER MORE</h5>
                </div>
              </a>
            </Col>
            <Col md={6} lg={3}>
              <a href="/">
                <div className="inner-box">
                  <div className="inner-img">
                    <img src={featured3} alt="" />
                  </div>
                  <h5>REPLY READY</h5>
                </div>
              </a>
            </Col>
            <Col md={6} lg={3}>
              <a href="/">
                <div className="inner-box">
                  <div className="inner-img">
                    <img src={featured4} alt="" />
                  </div>
                  <h5>EASY LAYOUT</h5>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    
    
    </>
  )
}

export default FeaturedComp;