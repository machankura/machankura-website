import React from 'react';
import logo from '../assets/images/logo.svg';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { BsFillLightningFill } from "react-icons/bs";

function Header() {
    return (
        <Navbar bg="transparent" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="mx-auto">
                    <img
                        src={logo}
                        height="60"
                        className="d-inline-block align-middle"
                        alt="Machankura logo"
                        style={{ margin: 10 }}
                    />{' '}
                    <h2 className='d-inline-block align-middle'>Machankura</h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
