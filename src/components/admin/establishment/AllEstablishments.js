import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import EstablishmentDetail from "./EstablishmentDetail";

const AllEstablishments = (props) => {
    const [enquiries, setEnquiries] = useState([])
    const [status, setStatus] = useState(JSON.parse(localStorage.getItem("AdminAction")) || []);
    const [establishments, setEstablishments] = useState([]);

        useEffect(() => {
            const url = BASE_URL + "enquiries";
            async function fetchEnquiries() {
                await fetch(url, {headers})
                .then(res => res.json())
                .then(data => setEnquiries(data))
            }
            fetchEnquiries();

        }, []) 
        
        useEffect(() => {
            const url = BASE_URL + "establishments";
            async function fetchEstablishments() {
                await fetch(url, {headers})
                .then(res => res.json())
                .then(estb => setEstablishments(estb));
            }
            fetchEstablishments();
        }, []) 

        useEffect(() => {
            if(status.length) {
                localStorage.setItem('AdminAction', JSON.stringify(status))
            }
        }, [status]); // eslint-disable-line react-hooks/exhaustive-deps
          

         function handlesetStatus(id, action) {
            setStatus([...status, { id, action }])
        }

    return (
        <Container className="margin">
            <Row>
                <Col>
                    <h2>All establishments</h2>
                </Col>
            </Row>
            <Row>
            {
                enquiries.length ?
                enquiries.map((enquiry) => (
                    <Col key={enquiry.id} md={4} className="pb-3">
                        <Card style={{backgroundColor: '#8DB5AA'}}>
                            <Card.Header className="estb-header">{establishments.filter(data => data.id === enquiry.establishmentId)[0] && establishments.filter(data => data.id === enquiry.establishmentId)[0].name || 'Establishment'}</Card.Header> 
                            <Card.Body>
                                <EstablishmentDetail
                                    enquiry={enquiry}
                                    status={status}
                                    handlesetStatus={handlesetStatus}
                                />
                            </Card.Body>
                        </Card>            
                    </Col>
                ))
                : <Spinner animation="grow" />
            }
            </Row>
        </Container>
    )
} 

export default AllEstablishments;
