import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <div className="shop-header">
          <Container>
            <Row>
              <Col lg={12}>
                <h1>CONTACT US</h1>
                <span>
                  <a href="/">Home</a>
                  <span className='shop1'> {'>'} Contact Us</span>
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="contact-section">
        <Container>
          <Row>
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
            <Col lg={6}>
              <div className="rightcontact">
                <Row>
                  <Col lg={12}>
                    <div className="map-sec">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.215334913565!2d72.84961067498142!3d19.229444882007037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Web%20Development%20%7C%20Data%20Science%20Python%20Alteryx%20%7C%20Software%20Testing%20%7C%20Android%20IOS%20Flutter%20Training!5e0!3m2!1sen!2sin!4v1689594716329!5m2!1sen!2sin" width="100%" height="325px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <form action="" className='contact-info'>
                      <Row>
                        <Col lg={6}>
                          <fieldset>
                            <input type="text" id='name' placeholder='Your Name...' />
                          </fieldset>
                        </Col>
                        <Col lg={6}>
                        <fieldset>
                            <input type="text" id='surname' placeholder='Your Surname...' />
                          </fieldset>
                        </Col>
                        <Col lg={6}>
                        <fieldset>
                            <input type="text" id='email' placeholder='Your E-mail...' />
                          </fieldset>
                        </Col>
                        <Col lg={6}>
                        <fieldset>
                            <input type="text" id='subject' placeholder='Your Subject...' />
                          </fieldset>
                        </Col>
                        <Col lg={12}>
                          <fieldset>
                            <textarea name="message" id="text-msg"  placeholder='Your Message'></textarea>
                          </fieldset>
                        </Col>
                        <Col lg={12}>
                          <fieldset>
                            <button type='submit' id='form-btn1'> Send Message Now</button>
                          </fieldset>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
 



    </>
  )
}

export default Contact;