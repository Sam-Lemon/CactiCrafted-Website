import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function DropNavBar () {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Succulents" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">All Succulents</NavDropdown.Item>
                            <NavDropdown.Item href="#">Exclusive Finds</NavDropdown.Item>
                            <NavDropdown.Item href="#">By Genus</NavDropdown.Item>
                            <NavDropdown.Item href="#">Hardy Succulents</NavDropdown.Item>
                            <NavDropdown.Item href="#">Soft Succulents</NavDropdown.Item>
                            <NavDropdown.Item href="#">Our Favorites</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Soil & Amendments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Succulent Soil</NavDropdown.Item>
                            <NavDropdown.Item href="#">Potting Soil</NavDropdown.Item>
                            <NavDropdown.Item href="#">Plant Food</NavDropdown.Item>
                            <NavDropdown.Item href="#">Fertilizer</NavDropdown.Item>
                            <NavDropdown.Item href="#">Admendments</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pots" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Small Pots - up to 6"</NavDropdown.Item>
                            <NavDropdown.Item href="#">Medium Pots - 6"-12"</NavDropdown.Item>
                            <NavDropdown.Item href="#">Large Pots - 12"+</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Precision Tools</NavDropdown.Item>
                            <NavDropdown.Item href="#">PPE</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}


