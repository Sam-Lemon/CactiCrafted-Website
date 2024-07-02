import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImage from "./LogoImg";
import AppRouterComp from "../API/AppRouterComp";

export default function NavBar() {

    return(
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <LogoImage />
                </Navbar.Brand>
                <Nav className="nav-links">
                    <AppRouterComp />
                </Nav>
            </Container>
        </Navbar>
        </>

    );
}



