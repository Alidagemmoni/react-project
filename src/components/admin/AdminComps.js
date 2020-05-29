import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const AdminComp = () => {
    return ( 
        <Container className="margin">
            <Row>
                <Col className="bg-specific center">
                    <h2>Enquiries</h2>
                    <Link to={"/admin/enquiries"}><img
                        src="/enquiry.svg"
                        width="100"
                        alt="Holidaze Logo"
                        className="middle"
                    /> 
                    </Link>
                    {/* link from image/icon to next site */}
                </Col>
                <Col className="bg-specific center">
                    <h2>Create establishment</h2>
                    <img
                        src="/estb.svg"
                        width="100"
                        alt="Holidaze Logo"
                        className="middle"
                    />
                </Col>
                <Col className="bg-specific center">
                    <h2>Messages</h2>
                    <img
                        src="/messages.svg"
                        width="100"
                        alt="Holidaze Logo"
                        className="middle"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminComp;