import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Container, Accordion } from 'react-bootstrap';

const FAQsPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({}); 
    useEffect(() => {
        setIsLoading(true);
        // grab the faqs from updatable public sheet for posterity
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTQ0W6fIdWg2ht3ADCmYIbH5zQ3T1WmDgYyMInSvnfvrAL7JTYIDHwjwjfhXBpB5CnJ541-XjTrAZ0A/pub?gid=0&single=true&output=csv", {
        download: true,
        header: true,
        complete: (results) => {
        setData(results.data);
        },
        });
        setIsLoading(false);
    }, []);
    
    const faqs = Array.from(data);

    if (isLoading) {
        return (
            <div className='faq-section mb-5'>
                <p>Loading FAQs...</p>
            </div>
        )
    }
    
    return (
        <Container>
        <div className='faq-section mb-5'>
        <h1 className='my-5'>Frequently asked questions</h1>
            {!isLoading && (
                <Accordion style={{maxWidth: "800px", marginBottom: "50px"}} defaultActiveKey="1" flush>
                {faqs.map((data) => (
                    <Accordion.Item eventKey={data.id}>
                        <Accordion.Header>{data.question}</Accordion.Header>
                        <Accordion.Body style={{textAlign: "left", fontSize: "1rem", lineHeight: "1.5"}}>
                        <p>{data.answer}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
            )}
        <p>Think we missed something? Need more information? Come chat with us on <a style={{color: "#000000", fontWeight: "700"}} target="_blank" href="https://chat.machankura.com" rel="noreferrer">Mattermost</a></p>
        </div>
        </Container>
    )
}

export default FAQsPage;