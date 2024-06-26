import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImage from "./LogoImg";

export default function NavBar() {

    return(
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <LogoImage />
                    Logo
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>

    );
}





