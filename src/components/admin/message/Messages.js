import React, { useState, useEffect} from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Messages = (props) => {
    const [message, setMessage] = useState([]);
    
        useEffect(() => {
            const url = BASE_URL + "contacts";
            async function fetchMessages() {
                await fetch(url, {headers})
                .then(res => res.json())
                .then(data => setMessage(data))
            }
            fetchMessages();

        }, [])  

    return (  
        <Container className="margin">
            <Row>
                <Col>
                    <h2>Messages</h2>
                </Col> 
            </Row>
            <Row>
            {
                message.length ?
                message.map((contact) => (
                <Col md={4} className="pb-3">
                    <Card>
                        <Card.Header style={{backgroundColor: '#8DB5AA'}}>Featured</Card.Header> 
                        <Card.Body>
                            <Card.Text>
                                <Form>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="4">
                                            Subject
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control plaintext readOnly defaultValue="Subject"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="4">
                                            From
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="email" plaintext readOnly defaultValue={contact.name} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="4">
                                            Email
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control plaintext readOnly defaultValue={contact.email} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="4">
                                            Message
                                        </Form.Label>
                                        <Col sm="6">
                                            <Form.Control plaintext readOnly defaultValue={contact.message} as="textarea" rows={5}/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                            <Button variant="primary" href={`/admin/messagerespond/${contact.name}`}>Respond</Button> 
                            {/* push this button to reply on a message with name from the message page */}
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

export default Messages;