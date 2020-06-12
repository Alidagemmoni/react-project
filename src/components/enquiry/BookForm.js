import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Col, Row, Button } from 'react-bootstrap';
import * as yup from "yup";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required").min(2, "First name must be at least 2 characters"),
	lastName: yup.string().required("Last name is required").min(2, "First name must be at least 2 characters"),
	email: yup.string().required("An email address is required").email("Please enter a valid email address"),
});


const BookForm = (props) => { 
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
    });

    return (  
            <section className="bg-specific">
                <Form style={{ padding: "20px" }}>  
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label className="form-label" column sm={2}>First name</Form.Label>
                        <Col sm={6}> 
                            <Form.Control
                                type="name"
                                ref={register}
                                value={props.enquiry.firstName}
                                onChange={(event) => props.setEnquiry({...props.enquiry, firstName: event.target.value})}
                            />
                            {errors.firstName && <Form.Text className="form-message">{errors.firstName.message}</Form.Text>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label className="form-label" column sm={2}>Last name</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                type="name"
                                ref={register}
                                value={props.enquiry.lastName}
                                onChange={(event) => props.setEnquiry({...props.enquiry, lastName: event.target.value})} 
                            />
                            {errors.lastName && <Form.Text className="form-message">{errors.lastName.message}</Form.Text>}
                        </Col>
                        </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label className="form-label" column sm={2}>Email</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                type="email" 
                                ref={register}
                                value={props.enquiry.email}
                                onChange={(event) => props.setEnquiry({...props.enquiry, email: event.target.value})}
                            />
                            {errors.email && <Form.Text className="form-message">{errors.email.message}</Form.Text>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label className="form-label" column sm={2}>Check in</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                                type="date" 
                                value={props.enquiry.checkIn}
                                onChange={(event) => props.setEnquiry({...props.enquiry, checkIn: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label className="form-label" column sm={2}>Check out</Form.Label>
                        <Col sm={6}>
                            <Form.Control 
                            type="date"   
                            value={props.enquiry.checkOut}
                            onChange={(event) => props.setEnquiry({...props.enquiry, checkOut: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                </Form>
                <Button onClick={handleSubmit(props.submitEnquiry)} className="button" block>Send enquiry</Button>  
            </section> 
    )
}

export default BookForm;