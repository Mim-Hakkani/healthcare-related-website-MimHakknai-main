import React from 'react';
import { Container, Row, Col, Navbar, Nav,Button } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png'
import {
 Link
} from "react-router-dom";
import useAuth from '../../context/useAuth';

const Header = () => {
  const {user,logOut}=useAuth()

    return (
       <header className=" py-2 bg-light" >
           <Container>
             <Row > 

               <Col lg={8} md={8} sm={12} xs={12}>
                 
                  
                    <div className="top-header-left d-lg-inline-flex d-md-inline-flex">

                        <div className="cell-number">
                            <i className="fas fa-phone-volume mx-3"></i>
                            (+880) 1819-108-86
                        </div>

                        <div className="email-number ">
                            <i class="fas fa-envelope mx-3"></i>
                            mim.cse32@gmail.com
                        </div>

                    </div>
                  
               </Col>

               <Col lg={4} md={4} sm={12} xs={12}>
                 <div className="social">
                   <li><a href="https://www.facebook.com" target="_blank" rel="social"><i className="fab fa-facebook"></i> </a> </li>
                   <li><a href="https://www.twitter.com" target="_blank" rel="social"><i className="fab fa-twitter"></i> </a> </li>
                   <li><a href="https://www.linkedin.com" target="_blank" rel="social"><i className="fab fa-linkedin"></i> </a> </li>
                   <li><a href="https://www.google.com" target="_blank" rel="social-icon"><i className="fab fa-google"></i> </a> </li>
                   <li><a href="https://www.viber.com" target="_blank" rel="social-icon"><i className="fab fa-viber"></i> </a> </li>
                   <li><a href="https://www.skype.com" target="_blank" rel="social-icon"><i className="fab fa-skype"></i> </a> </li>
                 </div>
               </Col>
             </Row>
           </Container>
           

           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">
                   <img src={logo}  alt="logo images" style={{height:'55px'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="me-auto justify-content-end" >
                  <Nav >
                    <Link as Link to="/home">Home</Link>
                    <Link as Link to="/gallery">Gallery</Link>
                    <Link as Link to="/doctor">Doctors</Link>
                    <Link as Link to="/blog">Blog</Link>

                   { user?.email?
                      <Button variant="light" onClick={logOut}>Logout</Button>:
                      <Link as Link to="/login">Login</Link>
                      }

                    {/* <button className="btn btn-primary mx-3 px-3">Login</button> */}

                    <Navbar.Text>
                       <span> {user?.displayName }</span>
                    </Navbar.Text>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>


      
        </header>
    );
};

export default Header;