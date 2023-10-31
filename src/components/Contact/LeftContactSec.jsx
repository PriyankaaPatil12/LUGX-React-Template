import React from 'react'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
const LeftContactSec = () => {
  return (
    <>
         <Col lg={6}>
              <div className="leftcontact">
                <div className="top-cont">
                  <h6>CONTACT US</h6>
                  <h2>Say Hello!</h2>
                </div>
                <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                <div className="listbox">
                  <ListGroup>
                    <ListGroup.Item> <span>Address</span> <br/>Sunny Isles Beach, FL 33160, United States</ListGroup.Item>
                    <ListGroup.Item> <span>Phone</span> <br/>+123 456 7890</ListGroup.Item>
                    <ListGroup.Item> <span>Email</span> <br/>lugx@contact.com</ListGroup.Item>                 
                  </ListGroup>
                </div>
              </div>
            </Col>
    </>
  )
}

export default LeftContactSec