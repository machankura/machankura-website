import React, { useState, useEffect } from "react";
import { Container, Accordion } from 'react-bootstrap';

const FAQsPage = () => {

        // const [data, setData] = useState({}); 
        // useEffect(() => {

        // }, []);
    
    // const faqs = Array.from(data);
    
    return (
        <Container>
        <div className='faq-section mb-5'>
        <h1 className='my-5'>Frequently asked questions</h1>
        <Accordion style={{maxWidth: "800px", marginBottom: "50px"}} defaultActiveKey="1" flush>
            <Accordion.Item eventKey="whatisbitcoin">
                <Accordion.Header>What is Bitcoin?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>Bitcoin is a fast-growing innovative technology that facilitates a trustless monetary system where transactions are borderless and can be finalized quickly, securely, and without intermediaries. Bitcoin takes all the qualities of money as we understand it and makes it better in every way.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="whatislightning">
                <Accordion.Header>What is Lightning?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>Lightning is the smarter way to use Bitcoin that allows for smaller, faster, cheaper, and more private payments. Essentially, the lightning network enables Bitcoin to scale and makes services like Machankura possible</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="whataresatoshis">
                <Accordion.Header>What are satoshis (sats)?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>A satoshi is the smallest unit of the Bitcoin currency. Since the Lightning network enables micropayments (which would be much harder on the Bitcoin network), the rightful denomination for these payments will be in satoshi. With lightning, you can send 1 satoshi (about 0.0002 USD) which isn’t even possible in the traditional monetary system we are used to.<br/>On Machankura, all transactions are denominated in satoshis so you might have to make some calculations prior. However, we are looking into more localization that would offer more convenience.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="whatismachankura">
                <Accordion.Header>What is Machankura?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>Machankura is a fully custodial bitcoin and lightning wallet that requires zero configuration and works on any mobile phone in the world and does not require an internet connection to send or receive bitcoin.<br/>Machankura takes advantage of USSD present on all mobile phones which is currently the best communication technology available for Africa and the base for several mobile financial services on the continent.<br/>Currently, Machankura works in the following countries:</p>
                    <ul>
                        <li>Ghana: *920*8333#</li>
                        <li>Kenya: *483*8333#</li>
                        <li>Malawi: *384*8333#</li>
                        <li>Namibia: *142*8333# (MTC only)</li>
                        <li>Nigeria: *347*8333#</li>
                        <li>South Africa: *134*382*382#</li>
                        <li>Tanzania: *149*46*26#</li>
                        <li>Uganda: *284*8333#</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="howdoesmachankurawork">
                <Accordion.Header>How does Machankura work?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>Users can access Machankura by dialing a USSD code which varies per country. When you dial the number for the first time, a bitcoin wallet that is tied to your phone number is instantly created for you. You are required to create a PIN that will encrypt your wallet and will also be used to confirm all future transactions on Machankura.<br/>Once your wallet has been created, a lightning address is generated for you using your phone number. For example: 256234567890@8333.mobi. You can also change this to a username of your choice e.g machankura@8333.mobi. Anyone can send you bitcoin on this lightning address. You can also send bitcoin to any user’s address.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="whoismachankurafor">
                <Accordion.Header>Who is Machankura for?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>Machankura was built for Africans in order to drive Bitcoin adoption on the continent and offer a more contextualized experience where internet penetration is low and smartphones aren’t mainstream.<br/>Currently, Machankura is available in 6 African countries: Ghana, Kenya, Malawi, Nigeria, South Africa, and Uganda.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="doineedinternetaccess">
                <Accordion.Header>Do I need internet access to send or receive bitcoin?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>Not at all.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="ismachankurafree">
                <Accordion.Header>Is Machankura free to use?</Accordion.Header>
                <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                    <p>Yes, Machankura is free to use in all the countries where it is available. You will not be charged any fees to receive bitcoin. However, there is a 1% fee to send bitcoin to any lightning address. This goes towards keeping our lightning nodes online and supporting the development and scaling efforts.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <p>Think we missed something? Need more information? Come chat with us on <a style={{color: "#000000", fontWeight: "700"}} target="_blank" href="https://chat.machankura.com" rel="noreferrer">Mattermost</a></p>
        </div>
        </Container>
    )
}

export default FAQsPage;
