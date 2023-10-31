import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

const CommonHead = () => {
    const breadcrumbs = {
        pageTitle: 'OUR SHOP',
        items: [],
      };
    
  return (
    <div className="shop-header">
    <Container>
      <Row>
        <Col lg={12}>
          <h1>{breadcrumbs.pageTitle}</h1>
          <span>
            <a href="/">Home</a>
            {breadcrumbs.items.map((item, index) => (
              <span key={index}>
                {' > '}
                <a href={item.link}>{item.pageTitle}</a>
              </span>
            ))}
          </span>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default CommonHead