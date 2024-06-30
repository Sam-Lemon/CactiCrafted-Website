import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap/';

export default function DropNavBar () {

    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown title="Succulents" id="succ-nav-dropdown">
                            <NavDropdown.Item href="#">All Succulents</NavDropdown.Item>
                            <NavDropdown.Item href="#">Exclusive Finds</NavDropdown.Item>
                            <NavDropdown.Item href="#">By Genus</NavDropdown.Item>
                            <NavDropdown.Item href="#">Hardy Succulents</NavDropdown.Item>
                            <NavDropdown.Item href="#">Soft Succulents</NavDropdown.Item>
                            <NavDropdown.Item href="#">Our Favorites</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Soil & Amendments" id="soil-nav-dropdown">
                            <NavDropdown.Item href="#">Succulent Soil</NavDropdown.Item>
                            <NavDropdown.Item href="#">Potting Soil</NavDropdown.Item>
                            <NavDropdown.Item href="#">Plant Food</NavDropdown.Item>
                            <NavDropdown.Item href="#">Fertilizer</NavDropdown.Item>
                            <NavDropdown.Item href="#">Admendments</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pots" id="pots-nav-dropdown">
                            <NavDropdown.Item href="#">Small Pots - up to 6"</NavDropdown.Item>
                            <NavDropdown.Item href="#">Medium Pots - 6"-12"</NavDropdown.Item>
                            <NavDropdown.Item href="#">Large Pots - 12"+</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tools" id="tools-nav-dropdown">
                            <NavDropdown.Item href="#">Precision Tools</NavDropdown.Item>
                            <NavDropdown.Item href="#">PPE</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}


