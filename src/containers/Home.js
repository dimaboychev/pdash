import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import TotalPopulation from "../components/TotalPopulation";
import FrontDoor from "../components/FrontDoor";
import TempHaven from "../components/TempHaven";

function Home() {
  return (
    <div className="home mb-5">
      <Navbar fixed="top" collapseOnSelect expand="lg" className="clean-navbar">
        <LinkContainer to="/">
          <a href="/">
            <img alt="logo" className="logo" src="/images/logo.png"/>
          </a>
        </LinkContainer>
        <LinkContainer to="/">
          <Navbar.Brand href="/">CFSA Public Dashboard</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/*<LinkContainer to="/accessibility">*/}
            {/*  <Nav.Link>Accessibility</Nav.Link>*/}
            {/*</LinkContainer>*/}
            <NavDropdown title="Dashboards" id="collasible-nav-dropdown">
              <LinkContainer to="/reports/hotline-calls">
                <NavDropdown.Item href="#action/3.1">Hotline Calls</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.2">Dashboard 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dashboard 3</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">All dashboards</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Reports</Nav.Link>
          </Nav>
          <Nav>
            <LinkContainer to="/feedback">
              <Nav.Link>Provide Feedback</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="my-container">
        <div className="crop">
          <img src="/images/children.jpg" alt="children"/>
        </div>
        {/*<div className="top-left navbar-brand active">*/}
        {/*  Child & Family Services Agency*/}
        {/*  <br/>*/}
        {/*  District of Columbia*/}
        {/*</div>*/}
        <div className="bottom-left">
          CFSA’s Public Dashboard shows our commitment to performance, transparency and public reporting.
        </div>
      </div>
      <div className="bg-light" >
        <TotalPopulation/>
      </div>
      <div style={{background:"#E8E8E8"}}>
        <FrontDoor />
      </div>
      <div className="bg-light">
        <TempHaven />
      </div>
    </div>
  );
}

export default Home;
