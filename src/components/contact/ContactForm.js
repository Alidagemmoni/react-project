import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import Container from "react-bootstrap/Container";
import { Col, Row, Form, Button } from "react-bootstrap";
import { BASE_URL, headers } from "../../constants/api";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required").min(2, "Please type more than 2 characters"),
    lastName: yup.string().required("Last name is required").min(2, "Please type more than 2 characters"),
    email: yup.string().email("Please enter a valid email").required("Please entter a valid email"),
    message: yup.string().required().min(10, "Please enter a message with more than 10 characters")
});

const ContactUs = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema    
    }); 

    const [submit, setSubmit] = useState(false);

    const data = {
        name: contact.firstName + " " + contact.lastName,
        email: contact.email,
        message: contact.message
    };

    function submitContact(event) {

        const url = BASE_URL + "contacts";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        fetch(url, options)
            .then(res => res.status === 201 && setSubmit(true));
    }

    return (
        <Container className="align-center">
            <Col lg={8}>
                <Row className="margin">
                    <Col>
                        {
                            submit ? <h2>Your message has been sent!</h2>
                                : <h2>Contact us</h2>
                        }
                    </Col>
                </Row>
                {
                    submit ? null :
                        <section className="bg-specific">
                            <Form style={{ padding: "20px" }}>
                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={3} className="contact-label">First name</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            name="firstName"
                                            ref={register}
                                            value={contact.firstName}
                                            onChange={(event) => setContact({ ...contact, firstName: event.target.value })}
                                        />
                                        {errors.firstName && <small>{errors.firstName.message}</small>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3} className="contact-label">Last name</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            name="lastName"
                                            ref={register}
                                            value={contact.lastName}
                                            onChange={(event) => setContact({ ...contact, lastName: event.target.value })}
                                        />
                                        {errors.lastName && <small>{errors.lastName.message}</small>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3} className="contact-label">Email</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            name="email"
                                            ref={register}
                                            value={contact.email}
                                            onChange={(event) => setContact({ ...contact, email: event.target.value })}
                                        />
                                        {errors.email && <small>{errors.email.message}</small>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3} className="contact-label">Message</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            name="message"
                                            ref={register}
                                            rows={3}
                                            as="textarea"
                                            value={contact.message}
                                            onChange={(event) => setContact({ ...contact, message: event.target.value })}
                                        />
                                        {errors.message && <small>{errors.message.message}</small>}
                                    </Col>
                                </Form.Group>
                            </Form>
                            <Button onClick={handleSubmit(submitContact)} className="button" block>Send message</Button>
                        </section>
                }
            </Col>
        </Container>
    )
}

export default ContactUs;