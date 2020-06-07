import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";


class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            username: "",
            password: "",
            isAuthenticated: false 
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        const admin = JSON.parse(localStorage.getItem('credential'));
        if(admin && admin.isAuthenticated) {
            this.props.history.push('/admincomp')
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin() {
        let admin = JSON.parse(localStorage.getItem('credential'));
        const { username, password } = this.state;
        if(admin && ((admin.username === username) && (admin.password === password))) {
            admin.isAuthenticated = true;
            localStorage.setItem('credential', JSON.stringify(admin))
            window.location.replace('/admincomp');
        }
    }

    render() {
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
                            <Form.Label className="login-label" column sm={3}>Username</Form.Label>
                            <Col>
                                <Form.Control
                                    className="login-input"
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalName">
                            <Form.Label className="login-label" column sm={3}>Password</Form.Label>
                            <Col>
                                <Form.Control
                                    className="login-input"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Form.Group>
                        
                    </Form>  
                    <Col className="d-flex justify-content-center"> 
                        <Button onClick={this.handleLogin} className="button" style={{width: '25%'}} size="sm">Log in</Button>
                    </Col> 
                </Col> 
            </Container>
        )
    }
}

export default AdminLogin;