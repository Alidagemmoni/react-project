import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required").min(2, "Please type more than 2 characters"),
	lastName: yup.string().required("Last name is required").min(2, "Please type more than 2 characters"),
	email: yup
		.string()
		.email("Please enter a valid email")
        .required("Please enter a valid email"), //validation for signs and letters in email?
	message: yup
		.string()
		.required()
		.min(10, "Plese enter a message with more than 10 characters")
});

const ContactPage = (props) => {
    const [ validated, setValidated ] = useState(false);
	const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    }); 

	function onSubmit(data, event) {
        console.log("data", data);
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }

	return (
            <section className="bg-specific">
                <Form style={{ padding: "20px" }}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>First name</Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                value={props.contact.firstName} 
                                onChange={(event) => props.setContact({...props.contact, firstName: event.target.value})}
                            />
                           {errors.firstName && <p>{errors.firstName.message}</p>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Last name</Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                value={props.contact.lastName}
                                onChange={(event) => props.setContact({...props.contact, lastName: event.target.value})}
                            />
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3} validated={validated}>Email</Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                value={props.contact.email}
                                onChange={(event) => props.setContact({...props.contact, email: event.target.value})}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3} validated={validated}>Message</Form.Label>
                        <Col sm={7}>
                            <Form.Control 
                            rows={3}
                            as="textarea"
                            value={props.contact.message}
                            onChange={(event) => props.setContact({...props.contact, message: event.target.value})}
                            />
                            {errors.message && <p>{errors.message}</p>}
                        </Col>
                    </Form.Group>  
                </Form>
                <Button onClick={props.submitContact} className="button" block>Send message</Button>
            </section>
	); 
}

export default ContactPage;