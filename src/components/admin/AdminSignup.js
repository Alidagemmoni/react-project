import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const AdminSignup = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        isAuthenticated: false
    });

    const handleSignup = () => {
        localStorage.setItem("credential", JSON.stringify(user))
    } 

   
    /* function useLocalState(localItem) {
        const [loc, setState ] = useState(JSON.parse(localStorage.getItem(localItem)));

        function setLoc(newItem) {
            localStorage.setItem(localItem, newItem);
        }

        return [loc, setLoc];
    } */

    //const [info, setInfo ] = useLocalState("credential");
     // Get the information from the state and save it to local storage?

    return (
        <Container className="d-flex justify-content-center">
            <Col lg={7}>
                <Row className="margin">
                    <Col className="d-flex justify-content-center">
                        <h2>Log in</h2> 
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
                                onChange={(event) => setUser({...user, password: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                    
                </Form>  
                <Col className="d-flex justify-content-center"> 
                    <Button onClick={handleSignup} className="button" style={{width: '25%'}} size="sm">Log in</Button>
                </Col> 
            </Col> 
        </Container>
    )
}

export default AdminSignup;