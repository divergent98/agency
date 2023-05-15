import React from 'react'
import { Link } from 'react-router-dom';

import{
    Navbar, 
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'
export const Heading = () => {
  return (
    <Navbar className=" navigation-admin" >
        <Container className='row '>
            <div className='col-4'>
            <NavbarBrand className="text-light" href="/">My trip</NavbarBrand>
            </div>
            <div className='col-8'>
                <Nav  className="align-items-left">
                    <NavItem>
                        <Link className='btn custom-btn btn-8 mx-3 text-light' to="/create/product">Add Products </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='btn custom-btn btn-8 mx-3 text-light' to="/create/posts">Add Post </Link>
                    </NavItem>
                </Nav>
            </div>
        </Container>

    </Navbar>
  )
}
