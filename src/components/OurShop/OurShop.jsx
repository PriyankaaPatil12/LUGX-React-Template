import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

import Pagination from 'react-bootstrap/Pagination';

import TopSec from './TopSec';
import NavTabs from './NavTabs';


export const OurShop = () => {
  return (
    <>
     <TopSec/>
     <NavTabs/>
     
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
