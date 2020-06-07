import React, { useState, useEffect, useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BASE_URL, headers } from "../../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import MessageDetail from './MessageDetail';
import RespondModal from './RespondModal';
import { NotificationContext } from '../../context/notifications';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [modal, setModal] = useState(false);
    const [response, setResponse] = useState({
        name: '',
        email: '',
        message: ''
    })
    const { dispatch } = useContext(NotificationContext);
 
    useEffect(() => {
        const url = BASE_URL + "contacts";
        async function fetchMessages() {
            await fetch(url, { headers })
                .then(res => res.json())
                .then(data => setMessages(data))
        }
        fetchMessages();
    }, []);

    const handleModalAction = (value, email, name) => {
        setModal(value)
        if(value){
            setResponse({...response, email, name})
        } else if(!value) {
            setResponse({
                name: '',
                email: '',
                message: ''
            });
        }
    }

    const handleSendMessage = () => {
        localStorage.setItem('Email', JSON.stringify(response));
        setModal(false);
        dispatch({ type: 'SUCCESS', message: 'Message Sent!' });
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
                        handleModalAction={handleModalAction}
                        response={response}
                        setResponse={setResponse}
                        handleSubmit={handleSendMessage}
                    />
                : null
            }
        </Container>
    )
}

export default Messages;