import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
export const Heading = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
            <Navbar className='hidden-big-screen'>
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> 
    <Navbar className=" navigation-admin hidden-small-screen " >
        <Container className='row '>
            <div className='col-4'>
            <NavbarBrand className="text-light" href="/">   <img src={logo} alt="logo" className="logo logo-admin"/></NavbarBrand>
            </div>
            <div className='col-8'>
                <Nav  className="align-items-left">
                    <NavItem>
                        <Link className='btn custom-btn btn-8 mx-3 text-light' to="/create/product"><span className='custom-link'>Products </span></Link>
                    </NavItem>
                    <NavItem>
                        <Link className='btn custom-btn btn-8 mx-3 text-light' to="/create/posts"><span className='custom-link'>Posts</span></Link>
                    </NavItem>
                    <NavItem>
                        <Link className='btn custom-btn btn-8 mx-3 text-light' to="/create/posts"><span className='custom-link'>View offers</span></Link>
                    </NavItem>
                </Nav>
            </div>
        </Container>

    </Navbar>
    </div>
  )
}
