import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import ReactCountryFlag from "react-country-flag";
import Demo from "../components/Demo/demo";
import { machankuraCountries } from "../data/countries";
import no_internet_image from "../assets/images/no-internet.svg"
import lightning_address from "../assets/images/lightning-address.svg"
import spend_bitcoin from "../assets/images/spend-bitcoin.svg"


const HomePage = () => {

    const [userCountry, setUserCountry] = useState("");
    const [isMachankuraCountry, setIsMachankuraCountry] = useState(false);

    const getGeoInfo = () => {
        fetch("https://ipapi.co/json/", {
        method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.country);
            setUserCountry(data.country);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    function checkCountry() {
        const result = machankuraCountries.find( ({ code }) => code === userCountry );
        if (result === undefined) {
            return 0;
        } else {
            setIsMachankuraCountry(true);
            console.log(result.code);// log the country code
        }
    }


    
    useEffect(() => {
        getGeoInfo();
        // checkCountry();
    }, []);

    return (
        <Container>
        <div className='app-section home-intro'>
            <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row" xs={1} md={2}>
                <Col>
                <h1>Use Bitcoin on any mobile phone!</h1>
                <p className='small-title'>Machankura turns your phone into a lightning wallet allowing you to send and receive bitcoin with just your mobile number</p>
                {/* check if country code in state matches country code of any machankuraCountry and return it's dial code */}
                {isMachankuraCountry && (
                    <h2>Dial the code yo</h2>
                )}
                </Col>
                <Col>
                <Demo />
                </Col>
            </Row>
        </div>
        <div className='app-section countries-section'>
            <h1>Live in {machankuraCountries.length} countries and counting...</h1>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                <Row className="d-flex justify-content-center mt-4 no-gutters" xs={2} md={3}>
                {machankuraCountries.map(country => (
                    <Col className="d-flex justify-content-center mb-4" key={country.code}>
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>
                                    <ReactCountryFlag
                                        countryCode={country.code}
                                        svg
                                        style={{
                                            width: '1.3em',
                                            height: '1.3em',
                                        }}
                                        title={country.name}
                                    /> <span style={{verticalAlign: "middle"}}>{country.name}</span>
                                </Card.Title>
                                <Card.Text style={{fontSize: '0.875em', fontWeight: "700"}}>
                                {country.ussd}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
        </div>
        <div className='why-section'>
            <Row className="align-items-center flex-column-reverse flex-md-row" xs={1} md={2} style={{marginTop: "100px"}}>
                <Col>
                    <h1>No internet necessary!</h1>
                    <p>Bitcoin is for all of us. That's why it is important to build for the millions of people on the African continent with no reliable internet access.  </p>
                </Col>
                <Col>
                <img alt="Look ma, no internet" src={no_internet_image} />
                </Col>
            </Row>
            <Row className="align-items-center" xs={1} md={2} style={{marginTop: "100px"}}>
                <Col>
                <img alt="lightning addresses" src={lightning_address} />
                </Col>
                <Col>
                    <h1>Simple, straight-forward Lightning addresses!</h1>
                    <p>For simplicity, users just need to know your phone number to send you bitcoin. If you prefer more anonymity, you can quickly setup a username to replace your phone number </p>
                </Col>
            </Row>
            <Row className="align-items-center flex-column-reverse flex-md-row" xs={1} md={2} style={{marginTop: "100px"}}>
                <Col>
                    <h1>Spend your bitcoin!</h1>
                    <p>We are working on adding more integrations that make it possible for you to do more with your bitcoin. We understand not everyone wants to HODL</p>
                </Col>
                <Col>
                <img alt="spend bitcoin" src={spend_bitcoin} />
                </Col>
            </Row>
        </div>
        </Container>
    );
}

export default HomePage;