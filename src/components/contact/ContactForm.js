import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Container from "react-bootstrap/Container";
import { Col, Row, Form, Button } from "react-bootstrap";
import { BASE_URL, headers } from "../../constants/api";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required").min(2, "Please type more than 2 characters"),
    lastName: yup.string().required("Last name is required").min(2, "Please type more than 2 characters"),
    email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
    message: yup.string().required("Please enter a message").min(10, "Please enter a message with more than 10 characters"),
});

const ContactUs = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",  
        message: ""
    });
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,  
    }); 

    const [submit, setSubmit] = useState(false);

    const data = {
        name: contact.firstName + " " + contact.lastName,
        email: contact.email,
        message: contact.message
    };

    function submitContact() {

        const url = BASE_URL + "contacts";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        fetch(url, options)
            .then(res => res.status === 201 && setSubmit(true));
    }

    return (
        <Container className="align-center">
            <Col lg={8}>
                <Row>
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
                                    <Form.Label className="form-label" column sm={3}>First name</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            type="firstName"
                                            ref={register}
                                            value={contact.firstName}
                                            onChange={(event) => setContact({ ...contact, firstName: event.target.value })}
                                        />
                                        {errors.firstName && <Form.Text className="form-message">{errors.firstName.message}</Form.Text>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3} className="form-label">Last name</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            type="lastName"
                                            ref={register}
                                            value={contact.lastName}
                                            onChange={(event) => setContact({ ...contact, lastName: event.target.value })}
                                        />
                                        {errors.lastName && <Form.Text className="form-message">{errors.lastName.message}</Form.Text>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3} className="form-label">Email</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            type="email"
                                            ref={register}
                                            value={contact.email}
                                            onChange={(event) => setContact({ ...contact, email: event.target.value })}
                                        />
                                        {errors.email && <Form.Text className="form-message">{errors.email.message}</Form.Text>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3} className="form-label">Message</Form.Label>
                                    <Col sm={7}>
                                        <Form.Control
                                            type="message"
                                            ref={register}
                                            rows={3}
                                            as="textarea"
                                            value={contact.message}
                                            onChange={(event) => setContact({ ...contact, message: event.target.value })}
                                        />
                                        {errors.message && <Form.Text className="form-message">{errors.message.message}</Form.Text>}
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