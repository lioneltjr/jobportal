import React, { Fragment } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function Navigation() {
    return <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="home">My Handy Job</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="http://a46a39a00366d4c55881a8f0cbd7b5fa-1845516511.ap-southeast-1.elb.amazonaws.com:3000/home">Home</Nav.Link>
                    <Nav.Link href="http://a46a39a00366d4c55881a8f0cbd7b5fa-1845516511.ap-southeast-1.elb.amazonaws.com:3000/postjob">Post a Job</Nav.Link>
                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="http://a46a39a00366d4c55881a8f0cbd7b5fa-1845516511.ap-southeast-1.elb.amazonaws.com:3000/profile">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="http://a46a39a00366d4c55881a8f0cbd7b5fa-1845516511.ap-southeast-1.elb.amazonaws.com:3000/update">View My Listings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Alerts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Messages</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
                </Form> */}
                <div id="logoutbtn"><Button variant="light">Logout</Button> </div>
            </Navbar.Collapse>
            
        </Navbar>
    </Fragment>
}