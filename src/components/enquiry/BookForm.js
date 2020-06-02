import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const BookForm = (props) => {
    return (  
            <section className="bg-specific">
                <Form style={{ padding: "20px" }}>  
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>First name</Form.Label>
                        <Col sm={6}> 
                            <Form.Control
                                type="name"
                                value={props.enquiry.firstName}
                                onChange={(event) => props.setEnquiry({...props.enquiry, firstName: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>Last name</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                            type="name"
                            value={props.enquiry.lastName}
                            onChange={(event) => props.setEnquiry({...props.enquiry, lastName: event.target.value})} 
                            />
                        </Col>
                        </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Email</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                            type="email" 
                            value={props.enquiry.email}
                            onChange={(event) => props.setEnquiry({...props.enquiry, email: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={2}>Check in</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                            type="date" 
                            value={props.enquiry.checkIn}
                            onChange={(event) => props.setEnquiry({...props.enquiry, checkIn: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={2}>Check out</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                            type="date"   
                            value={props.enquiry.checkOut}
                            onChange={(event) => props.setEnquiry({...props.enquiry, checkOut: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                </Form>
                <Button onClick={props.submitEnquiry} className="button" block>Send enquiry</Button>  
            </section> 
    )
}

export default BookForm;