import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers } from "../../../constants/api";

const MessageRespond = (props) => {
    const [ respond, setRespond] = useState({});

    useEffect(() => {
        const id = props.match.params.id
        const url = BASE_URL + "contacts" + id;
        async function fetchContact() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => setRespond(data))
        }
        fetchContact();
        console.log(respond)
    }, [])

    return (
        <Container className="margin">
            <Row>
                <Col>
                    <h2>Respond to {respond.name}</h2>
                </Col> 
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="8" placeholder="Respond to message here..." />
                        </Form.Group>
                    </Form>  
                    <Button variant="primary">Send message</Button> {/* push this button to reply on message page */}        
                </Col>
            </Row>
        </Container>
    )
}

export default MessageRespond;