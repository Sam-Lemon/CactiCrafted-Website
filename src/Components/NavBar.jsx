import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImage from "./LogoImg";
import AppRouterComp from "../API/AppRouterComp";

export default function NavBar() {

    return(
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <LogoImage />
                    </Navbar.Brand>
                    <Nav>
                        <AppRouterComp />
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
}



