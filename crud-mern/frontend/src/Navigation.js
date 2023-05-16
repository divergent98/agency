import React from 'react'
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import{
    Navbar, 
    Nav,
    NavItem,
    Container
} from 'reactstrap'
export const Navigation = () => {
  return (
    <Navbar className='text-light bg-transparent navigation-home' >
        <Container className='row '>
            <div className='col-4'>
                {/* frontend\src\img\logo.png */}
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className='col-8'>
                <Nav className="align-items-left">
              
                    <NavItem>
                        <Link className='btn text-light mx-3' to="/BlogPosts">Blog</Link>
                    </NavItem>
                    <NavItem>
                        <Link className='btn text-light mx-3'>Special Offers</Link>
                    </NavItem>
                    <NavItem>
                        <Link className='btn text-light mx-3'>Hot Tours</Link>
                    </NavItem>
                    <NavItem>
                        <Link className='btn text-light mx-3'>Contact</Link>
                    </NavItem>
              
                    <NavItem className="ms-5 ">
                   
                        <Link to="/Login" className="btn custom-btn btn-8"><span>Login
    </span></Link>
                    </NavItem>
                
                </Nav>
            </div>
        </Container>

    </Navbar>
  )
}
