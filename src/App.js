import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from './components/HomeComp/Home';
import Appbar from './components/NavFootComp/Appbar';
import FooterComp from './components/NavFootComp/FooterComp';
import OurShop from './components/OurShop/OurShop';
import ProductDetails from './components/Product/ProductDetails';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ourshop' element={<OurShop/>} />
        <Route path='/productdetails' element={<ProductDetails/>} />
        <Route path='/contactus' element={<Contact/>} />
      </Routes>
      <FooterComp/>
      </Router>
    </div>
  );
}

export default App;
