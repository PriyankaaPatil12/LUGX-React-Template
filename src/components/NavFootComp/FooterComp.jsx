import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';

const FooterComp = () => {
  return (
    <>
     <div className="footer-section foot">
        <Container>
          <Col lg={12}>
            <p>Copyright © 2048 LUGX Gaming Company. All rights reserved. <a href="/"> Design: TemplateMo</a></p>
          </Col>
        </Container>
      </div>
    </>
  )
}

export default FooterComp;