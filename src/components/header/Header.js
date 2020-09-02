import React from 'react';
import './Header.css'
import {Navbar, Nav} from 'react-bootstrap';
const Header = () => {
    return (

        <div className='navbar'>
           <Navbar bg="#fff" variant="light">
            <img src="https://i.imgur.com/B6P4z6D.png" alt=""/>
            <Navbar.Brand></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link className='child' href="#home">Home</Nav.Link>
            <Nav.Link className='child' href="#courses">Courses</Nav.Link>
            <Nav.Link className='child' href="#pricing">Pricing</Nav.Link>
            <Nav.Link className='child' href="#logIn">Log In</Nav.Link>
            <Nav.Link className='child' href="#getStarted">Get Started</Nav.Link>
            </Nav>
        </Navbar>


</div>
    );
};

export default Header;