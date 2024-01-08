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
                <p className='small-title'>Machankura turns your phone into a lightning wallet allowing you to send and receive bitcoin with just your mobile number.</p>
                {/* check if country code in state matches country code of any machankura Country and return its dial code */}
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
            <div class="row">
                <div class="col"></div>
            </div>
            <h1>Live in 7 countries and counting...</h1>
            <div class="row center">
                <div class="col-sm-12 col-md-4">
                    <h2>Ghana </h2>
                    <p class="flow-text">*920*8333#</p>
                </div>
                <div class="col-sm-12 col-md-4">
                    <h2>Kenya </h2>
                    <p class="flow-text">*483*8333#</p>
                </div>
                <div class="col-sm-12 col-md-4">
                    <h2>Malawi </h2>
                    <p class="flow-text">*384*8333#</p>
                </div>
                <div class="col-sm-12 col-md-4"> 
                    <h2>Namibia </h2>
                    <p class="flow-text">*142*8333#</p>
                </div>
                <div class="col-sm-12 col-md-4"> 
                    <h2>Nigeria </h2>
                    <p class="flow-text">*347*8333#</p>
                </div>
                <div class="col-sm-12 col-md-4"> 
                    <h2>South Africa </h2>
                    <p class="flow-text">*134*382*382#</p>
                </div>
                <div class="col-sm-12 col-md-4"> 
                    <h2 style={{textDecoration: "line-through"}}>Tanzania </h2>
                    <p class="flow-text" style={{textDecoration: "line-through"}}>*149*46*26#</p>
                </div>
                <div class="col-sm-12 col-md-4"> 
                    <h2>Uganda </h2>
                    <p class="flow-text">*284*8333#</p>
                </div>
                <div class="col-sm-12 col-md-4"> 
                    <h2>Zambia </h2>
                    <p class="flow-text">*384*8333#</p>
                </div>
            </div>
        </div>
        <div className='why-section'>
            <Row className="align-items-center flex-column-reverse flex-md-row" xs={1} md={2} style={{marginTop: "100px"}}>
                <Col>
                    <h1>No internet necessary!</h1>
                    <p>Bitcoin is for all of us. That's why it is important to build for the millions of people on the African continent with no reliable internet access.  </p>
                </Col>
                <Col>
                <img alt="Look ma, no internet" class="img-fluid" src={no_internet_image} />
                </Col>
            </Row>
            <Row className="align-items-center" xs={1} md={2} style={{marginTop: "100px"}}>
                <Col>
                <img alt="lightning addresses" class="img-fluid"  src={lightning_address} />
                </Col>
                <Col>
                    <h1>Simple, straight-forward Lightning addresses!</h1>
                    <p>For simplicity, users just need to know your phone number to send you bitcoin. If you prefer more anonymity, you can quickly setup a username to replace your phone number.</p>
                </Col>
            </Row>
            <Row className="align-items-center flex-column-reverse flex-md-row" xs={1} md={2} style={{marginTop: "100px"}}>
                <Col>
                    <h1>Spend your bitcoin!</h1>
                    <p>We are working on adding more integrations that make it possible for you to do more with your bitcoin. We understand not everyone wants to HODL.</p>
                </Col>
                <Col>
                <img alt="spend bitcoin" class="img-fluid"  src={spend_bitcoin} />
                </Col>
            </Row>
        </div>
        </Container>
    );
}

export default HomePage;
