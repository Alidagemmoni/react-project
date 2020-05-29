import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Accepted from "./Accepted";

const Enquiries = (props) => {
    const [card, setCard] = useState([]);
    const [btnAccept, setBtnAccept] = useState(false);
    
        useEffect(() => {
            const url = BASE_URL + "enquiries";
            async function fetchEnquiries() {
                await fetch(url, {headers})
                .then(res => res.json())
                .then(data => setCard(data))
            }
            fetchEnquiries();

        }, [])  
          

         function handleAcceptRequest(index) {
            console.log(index)
            setBtnAccept(true)
        }
        // setAccept(Accepted);
  
        
        // If the user presses accept, useState will be true, and if its true- it will show the accept-component?, if not, show the regular cards.

        // const [decline, setDecline] = useState(false)

    return (
        <Container className="margin">
            <Row>
            {
                card.length ?
                card.map((enquiry, i) => (
                    <Col key={i} md={4} className="pb-3">
                        <Card>
                            <Card.Header style={{backgroundColor: '#8DB5AA'}}>Featured</Card.Header> 
                            <Card.Body>
                                    <Form key={i}>
                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="4">
                                                Name
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control plaintext readOnly defaultValue={enquiry.name}/>
                                            </Col>
                                        </Form.Group>
                                        { btnAccept ? null :
                                            <>
                                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                                    <Form.Label column sm="4">
                                                        Email
                                                    </Form.Label>
                                                    <Col sm="8">
                                                        <Form.Control type="email" plaintext readOnly defaultValue={enquiry.email} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                                    <Form.Label column sm="4">
                                                        Check-In
                                                    </Form.Label>
                                                    <Col sm="8">
                                                        <Form.Control plaintext readOnly defaultValue={enquiry.checkIn} />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                                    <Form.Label column sm="4">
                                                        Check-Out
                                                    </Form.Label>
                                                    <Col sm="6">
                                                        <Form.Control plaintext readOnly defaultValue={enquiry.checkOut} />
                                                    </Col>
                                                </Form.Group>
                                            </>
                                        }
                                    </Form>
                                <Button variant="primary" onClick={() => handleAcceptRequest(i)}>Accept</Button>
                                <Card.Link href="#" className="float-right mt-1">Decline</Card.Link>
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

export default Enquiries;
