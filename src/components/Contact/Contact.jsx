import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import LeftContactSec from './LeftContactSec';
import RightContactSec from './RightContactSec';
import TopHeader from './TopHeader';


const Contact = () => {
  return (
    <>
      <TopHeader/>
      <div className="contact-section">
        <Container>
          <Row>
            <LeftContactSec/>
            <RightContactSec/>
          </Row>
        </Container>
      </div>
 



    </>
  )
}

export default Contact;