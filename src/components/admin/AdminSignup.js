import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const AdminSignup = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        isAuthenticated: true
    });

    const handleSignup = () => {
        localStorage.setItem("credential", JSON.stringify(user))
    } 

    return (
        <Container className="d-flex justify-content-center">
            <Col lg={7}>
                <Row className="margin">
                    <Col className="d-flex justify-content-center">
                        <h2>Sign Up</h2> 
                    </Col>                
                </Row>
                <Form style={{ padding: "20px" }}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>Username</Form.Label>
                        <Col>
                            <Form.Control
                                value={user.username}
                                onChange={(event) => setUser({...user, username: event.target.value.toLowerCase()})}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col>
                            <Form.Control
                                type="password"
                                value={user.password}
                                onChange={(event) => setUser({...user, password: event.target.value.toLowerCase()})}
                            />
                        </Col>
                    </Form.Group>
                    
                </Form>  
                <Col className="d-flex justify-content-center"> 
                    <Button onClick={handleSignup} className="button" style={{width: '25%'}} size="sm">Register</Button>
                </Col> 
            </Col> 
        </Container>
    )
}

export default AdminSignup;