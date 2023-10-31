import React from 'react'
import CategoriesComp from './CategoriesComp';
import Container from 'react-bootstrap/Container';


const MainCatgory = () => {
  return (
    <>
    <div className="action-catgories">
        <Container>
          <div className="top-category">
            <h6>CATEGORIES</h6>
            <h1>Top Categories</h1>
          </div>
          <CategoriesComp/>
        </Container>
      </div>
    </>
  )
}

export default MainCatgory