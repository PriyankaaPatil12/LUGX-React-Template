import React from 'react'
import Trend from './HomeComp/Trend';
import Featured from './HomeComp/Featured';
import TopPage from './HomeComp/TopPage';
import TopGame from './HomeComp/TopGame';
import Categories from './HomeComp/Categories';
import Newsletter from './HomeComp/Newsletter';


const Home = () => {
  return (
    <>
      <TopPage />

      <Featured />

      <Trend />

      <TopGame/>

      <Categories/>

      <Newsletter/>     
    </>

  )
}

export default Home;