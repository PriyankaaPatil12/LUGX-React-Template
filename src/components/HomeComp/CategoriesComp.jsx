import React from 'react';
import categories1 from "./../../assets/home/categories-01.jpg";
import categories2 from "./../../assets/home/categories-05.jpg";
import categories3 from "./../../assets/home/categories-03.jpg";
import categories4 from "./../../assets/home/categories-04.jpg";
import categories5 from "./../../assets/home/categories-05.jpg";

const CategoriesComp = () => {


  const mycategory=[
    {title:'Action',image:categories1,},
    {title:'Action',image:categories2,},
    {title:'Action',image:categories3,},
    {title:'Action',image:categories4,},
    {title:'Action',image:categories5,},
  ]

  return (
    <>             
          <div className="flex-box">
            {
              mycategory.map((elem,ind)=>{
              return(
                <div key={ind} className="action-box">
                <h5>{elem.title}</h5>
                <div className="action-img">
                  <a href="productdetails">
                    <img src={elem.image} alt="" />
                  </a>
                </div>
              </div>
              )
              })
            }
            
          </div>
       
    </>
  )
}

export default CategoriesComp;