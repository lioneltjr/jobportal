import React, { Fragment } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function Navigation() {
    return <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">My Handy Job</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Post a Job</Nav.Link>
                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Job Records</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Alerts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Messages</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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