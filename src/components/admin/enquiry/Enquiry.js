import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";

const Enquiries = (props) => {
    const [card, setCard] = useState([]);
    
        useEffect(() => {
            const url = BASE_URL + "enquiries";
            async function fetchEnquiries() {
                await fetch(url, {headers})
                .then(res => res.json())
                .then(data => setCard(data))
            }
            fetchEnquiries();

            
        }, [])  

    return (
        <Container className="margin">
            <Row>
            {
                card.length ?
                card.map((enquiry) => (
                    <Col md={4} className="pb-3">
                        <Card>
                            <Card.Header style={{backgroundColor: '#8DB5AA'}}>Featured</Card.Header> 
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="4">
                                                Name
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control plaintext readOnly defaultValue={enquiry.name}/>
                                            </Col>
                                        </Form.Group>
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
                                    </Form>
                                </Card.Text>
                                <Button variant="primary">Accept</Button>
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
