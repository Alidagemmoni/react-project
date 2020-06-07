import React, {useState} from "react";
import ContactForm from "./ContactForm";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { BASE_URL, headers } from "../../constants/api";


const ContactUs = (props) => {
    const [contact, setContact] = useState({
        firstName: "", 
        lastName: "",
        email: "",
        message: ""
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

        fetch (url, options)
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
                        <ContactForm 
                            submitContact={submitContact}
                            contact={contact}
                            setContact={setContact}
                        />
                    }
            </Col>
        </Container>
    )
}

export default ContactUs;