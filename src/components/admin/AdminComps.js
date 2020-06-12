import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const AdminComp = () => {
    return ( 
        <Container className="margin flex-column">
            <Row> 
                <Col className="bg-specific center block-1">
                    <h2 className="comp-header">Establishments</h2>
                    <Link to={"/admin/establishments"}>
                        <img
                        src="/enquiry.png"
                        width="100"
                        alt="Letter and person icons"
                        className="middle"
                        /> 
                    </Link>
                </Col>
                <Col className="bg-specific center block-2">
                    <h2 className="comp-header">Create establishment</h2>
                    <Link to={"/admin/createestb"}>
                    <img
                        src="/estb.png"
                        width="100"
                        alt="House icon"
                        className="middle"
                    />
                    </Link>
                </Col>
                <Col className="bg-specific center block-3">
                    <h2 className="comp-header">Messages</h2>
                    <Link to={"/admin/message"}>
                        <img
                            src="/messages.png"
                            width="100"
                            alt="Letter icon"
                            className="middle"
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminComp;