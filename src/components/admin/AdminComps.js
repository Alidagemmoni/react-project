import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const AdminComp = () => {
    return ( 
        <Container className="margin">
            <Row> 
                <Col className="bg-specific center">
                    <h2 className="comp-header">Establishments</h2>
                    <Link to={"/admin/establishments"}>
                        <img
                        src="/enquiry.svg"
                        width="100"
                        alt="Holidaze Logo"
                        className="middle"
                        /> 
                    </Link>
                </Col>
                <Col className="bg-specific center">
                    <h2 className="comp-header">Create establishment</h2>
                    <Link to={"/admin/createestb"}>
                    <img
                        src="/estb.svg"
                        width="100"
                        alt="Holidaze Logo"
                        className="middle"
                    />
                    </Link>
                </Col>
                <Col className="bg-specific center">
                    <h2 className="comp-header">Messages</h2>
                    <Link to={"/admin/message"}>
                        <img
                            src="/messages.svg"
                            width="100"
                            alt="Holidaze Logo"
                            className="middle"
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminComp;