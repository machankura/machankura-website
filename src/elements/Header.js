import React from 'react';
import logo from '../assets/images/logo.svg';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { BsFillLightningFill } from "react-icons/bs";

function Header(props: any) {
    return (
        <Navbar bg="transparent" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="60"
                        className="d-inline-block align-middle"
                        alt="Machankura logo"
                        style={{ margin: 10 }}
                    />{' '}
                    <h2 className='d-inline-block align-middle'>Machankura</h2>
                </Navbar.Brand>
                {!props.hideNav && (
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                )}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    {!props.hideNav && (
                        <Nav style={{fontSize: "1.2rem"}}>
                            <Nav.Link href="/faqs">FAQs</Nav.Link>
                            <Nav.Link href="/contribute">Contribute</Nav.Link>
                            <Nav.Link href="https://twitter.com/machankura8333" target="_blank">Twitter</Nav.Link>
                            <Nav.Link href="https://chat.machankura.com" target="_blank">Mattermost</Nav.Link>
                            <Nav.Link href="https://github.com/machankura" target="_blank">Github</Nav.Link>

                            <Button className='ms-5' variant="dark"><BsFillLightningFill size="1.2rem" color='#ffd022'></BsFillLightningFill> Donate</Button>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
