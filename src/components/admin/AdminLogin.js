import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";


const AdminLogin = () => {

    return (
        <section>
            <Row className="margin">
                <Col>
                    <h2>Log in</h2> 
                </Col>                
            </Row>
            <Form style={{ padding: "20px" }}>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>Username</Form.Label>
                    <Col sm={6}>
                        <Form.Control/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={6}>
                        <Form.Control/>
                    </Col>
                </Form.Group>
            </Form>
            <Button className="button" type="submit">Send enquiry</Button>  
        </section> 
    )
}

export default AdminLogin;