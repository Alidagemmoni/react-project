import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const MessageDetail = (props) => {
    return (
        <>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        From
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="email" plaintext readOnly defaultValue={props.contact.name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Email
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control plaintext readOnly defaultValue={props.contact.email} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Message
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control plaintext readOnly defaultValue={props.contact.message} as="textarea" rows={5} />
                    </Col>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={() => props.handleModalAction(true, props.contact.email)}>Respond</Button>
        </>
    )
}
export default MessageDetail;