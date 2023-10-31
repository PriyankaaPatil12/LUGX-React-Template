import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import topgame1 from "./../../assets/home/top-game-01.jpg";
import topgame2 from "./../../assets/home/top-game-02.jpg";
import topgame3 from "./../../assets/home/top-game-03.jpg";
import topgame4 from "./../../assets/home/top-game-04.jpg";
import topgame5 from "./../../assets/home/top-game-05.jpg";
import topgame6 from "./../../assets/home/top-game-06.jpg";

const TopGame = () => {
  return (
    <>
    <div className="most-played-games">
        <Container>
          <Row className='trend'>
            <Col lg={6}>
              <div className="new-head top-game">
                <h5>TOP GAMES</h5>
                <h2>Most Played</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="view-btn">
                <a href="/ourshop">View All</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={2}>
              <div className="card-box game-box">
                <div className="image-box">
                  <a href="/productdetails">
                    <img src={topgame1} alt="" />
                  </a>
                </div>
                <div className="bottom-gamebox">
                  <div className="adventure-box">
                    <span className='spanaction'>Adventure</span>
                    <h5>Assasin Creed</h5>
                  </div>
                  <div className="bottom-btn">
                    <a href="/productdetails">EXPLORE</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="card-box game-box">
                <div className="image-box">
                  <a href="/productdetails">
                    <img src={topgame2} alt="" />
                  </a>
                </div>
                <div className="bottom-gamebox">
                  <div className="adventure-box">
                    <span className='spanaction'>Adventure</span>
                    <h5>Assasin Creed</h5>
                  </div>
                  <div className="bottom-btn">
                    <a href="/productdetails">EXPLORE</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="card-box game-box">
                <div className="image-box">
                  <a href="/productdetails">
                    <img src={topgame3} alt="" />
                  </a>
                </div>
                <div className="bottom-gamebox">
                  <div className="adventure-box">
                    <span className='spanaction'>Adventure</span>
                    <h5>Assasin Creed</h5>
                  </div>
                  <div className="bottom-btn">
                    <a href="/productdetails">EXPLORE</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="card-box game-box">
                <div className="image-box">
                  <a href="/productdetails">
                    <img src={topgame4} alt="" />
                  </a>
                </div>
                <div className="bottom-gamebox">
                  <div className="adventure-box">
                    <span className='spanaction'>Adventure</span>
                    <h5>Assasin Creed</h5>
                  </div>
                  <div className="bottom-btn">
                    <a href="/productdetails">EXPLORE</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="card-box game-box">
                <div className="image-box">
                  <a href="/productdetails">
                    <img src={topgame5} alt="" />
                  </a>
                </div>
                <div className="bottom-gamebox">
                  <div className="adventure-box">
                    <span className='spanaction'>Adventure</span>
                    <h5>Assasin Creed</h5>
                  </div>
                  <div className="bottom-btn">
                    <a href="/productdetails">EXPLORE</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="card-box game-box">
                <div className="image-box">
                  <a href="/productdetails">
                    <img src={topgame6} alt="" />
                  </a>
                </div>
                <div className="bottom-gamebox">
                  <div className="adventure-box">
                    <span className='spanaction'>Adventure</span>
                    <h5>Assasin Creed</h5>
                  </div>
                  <div className="bottom-btn">
                    <a href="/productdetails">EXPLORE</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TopGame