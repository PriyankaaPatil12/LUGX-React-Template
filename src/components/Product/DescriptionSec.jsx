import React,{useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

const DescriptionSec = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <>
       <div className="description-section">
        <Container>
          <div className="content-box">
          <Row>
            <Col lg={12}>
              <div className="info-box">
                <ul>
                  <li className={toggleState===1 ? "active" : "des"} onClick={() => toggleTab(1)}>Description</li>
                  <li className={toggleState===2 ? "active" : "rev"} onClick={() => toggleTab(2)}>Reviews(3)</li>            
                </ul>
              </div>
                <div>
                <div className={toggleState===1 ? "content active-content" :"content"}>
                <p>You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
                <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
              </div>
              <div className={toggleState===2 ? "content active-content" : "content"}>
              <p>
              Coloring book air plant shabby chic, crucifix normcore raclette
              cred swag artisan activated charcoal. PBR&B fanny pack pok pok
              gentrify truffaut kitsch helvetica jean shorts edison bulb poutine
              next level humblebrag la croix adaptogen.
              <br />
              <br />
              Hashtag poke literally locavore, beard marfa kogi bruh artisan
              succulents seitan tonx waistcoat chambray taxidermy. Same cred
              meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical
              gluten-free art party raw denim chillwave tousled try-hard
              succulents street art.
            </p>
                 </div>
                </div>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default DescriptionSec