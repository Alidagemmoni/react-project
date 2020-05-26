import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const AdminLogin = () => {

    return (
        <Container fluid="sm">
            <section>
                <Row className="margin">
                    <Col className="d-flex justify-content-center">
                        <h2>Log in</h2> 
                    </Col>                
                </Row>
                <Form style={{ padding: "20px" }}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>Username</Form.Label>
                        <Col>
                            <Form.Control/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col>
                            <Form.Control/>
                        </Col>
                    </Form.Group>
                </Form>
                <Col className="d-flex justify-content-center"> 
                    <Button className="button" size="lg" type="submit">Log in</Button>  
                </Col>
            </section> 
        </Container>
    )
}

export default AdminLogin;