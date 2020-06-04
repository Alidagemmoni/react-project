import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import MessageDetail from './MessageDetail';
import RespondModal from './RespondModal';

const Messages = (props) => {
    const [messages, setMessages] = useState([]);
    const [modal, setModal] = useState(false);
    const [response, setResponse] = useState({
        email: '',
        message: ''
    })

    useEffect(() => {
        const url = BASE_URL + "contacts";
        async function fetchMessages() {
            await fetch(url, { headers })
                .then(res => res.json())
                .then(data => setMessages(data))
        }
        fetchMessages();
 
    }, []);

    const handleModalAction = (value, email) => {
        setModal(value)
        if(email){
            setResponse({...response, email})
        } else if(!value) {
            setResponse({
                email: '',
                message: ''
            });
        }
        
    }

    return (
        <Container className="margin">
            <Row>
                <Col>
                    <h2>Messages</h2>
                </Col>
            </Row>
            <Row>
                {
                    messages.length ?
                        messages.map((contact) => (
                            <Col md={4} key={contact.id} className="pb-3">
                                <Card>
                                    <Card.Header style={{ backgroundColor: '#8DB5AA' }}>Featured</Card.Header>
                                    <Card.Body>
                                        <MessageDetail
                                         handleModalAction={handleModalAction}
                                         contact={contact}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        : <Spinner animation="grow" />
                }
            </Row>
            {
                modal ?
                    <RespondModal
                        open={modal}
                        handleClose={handleModalAction}
                        response={response}
                        setResponse={setResponse}
                    />
                : null
            }
        </Container>
    )
}

export default Messages;