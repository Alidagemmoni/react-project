import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const AdminLogin = () => {

    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const data = {
        username: login.username,
        password: login.password

    };

    const history = useHistory();

    const handleLogin = () => {
        localStorage.setItem("credential", JSON.stringify(data))
        history.push("/admin");
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
                                value={login.username}
                                onChange={(event) => setLogin({...login, username: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col>
                            <Form.Control
                                type="password"
                                value={login.password}
                                onChange={(event) => setLogin({...login, password: event.target.value})}
                            />
                        </Col>
                    </Form.Group>
                    
                </Form>  
                <Col className="d-flex justify-content-center"> 
                    <Button onClick={handleLogin} className="button" style={{width: '25%'}} size="sm">Log in</Button>
                </Col> 
            </Col> 
        </Container>
    )
}

export default AdminLogin;