import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
const Appbar = () => {

  const [name,setName] = useState('');
  useEffect(()=>{
    document.title = name;
  },[name]);

  

  return (
    <div className='mainbox'>
      <Navbar expand="lg" className=" topnav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo1} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink id="home" className="nav-link" to="/">Home</NavLink>
              <NavLink id="home" className="nav-link" to="/ourshop">Our Shop</NavLink>
              <NavLink id="home"  className="nav-link" to="/productdetails">Product Details</NavLink>
              <NavLink id="home"  className="nav-link" to="/contactus">Contact</NavLink>
              <button className='btn1'>SIGN IN</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    </div>
  )
}

export default Appbar;