import React from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";

const EstablishmentDetail = (props) => {
    if (props.status.filter((data) => data.id === props.enquiry.id)[0] && props.status.filter((data) => data.id === props.enquiry.id)[0].action === "accept") {
        return (
            <>
                <h2 className="text-center">Accepted</h2>
                <img
                    src="/accepted.svg"
                    width="100"
                    alt="Accpeted icon"
                    className="middle"
                /> 
            </>
        )
    } else if (props.status.filter((data) => data.id === props.enquiry.id)[0] && props.status.filter((data) => data.id === props.enquiry.id)[0].action === "decline") {
        return (
            <>
                <h2 className="text-center">Declined</h2>
                <img
                    src="/decline.svg"
                    width="78"
                    alt="Declined icon"
                    className="middle"
                /> 
            </>  
        )
    } else {
        return (
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Name
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control plaintext readOnly defaultValue={props.enquiry.name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Email
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="email" plaintext readOnly defaultValue={props.enquiry.email} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Check-In
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control plaintext readOnly defaultValue={new Date(props.enquiry.checkIn).toDateString()} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Check-Out
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control plaintext readOnly defaultValue={new Date(props.enquiry.checkOut).toDateString()} />
                    </Col>
                </Form.Group>
                <Button variant="primary" onClick={() => props.handlesetStatus(props.enquiry.id, 'accept')}>Accept</Button>
                <Card.Link href="#" onClick={() => props.handlesetStatus(props.enquiry.id, 'decline')} className="float-right mt-1">Decline</Card.Link>
            </Form>
        )
    }
}

export default EstablishmentDetail;
