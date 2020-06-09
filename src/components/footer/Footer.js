import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Row className="footer"> 
            <Col className="icons">
                <Link to="https://www.facebook.com/">
                    <img  
                        src="/facebook.png"
                        width="50"
                        className="d-inline-block align-top"
                        alt="Facebook icon"
                    />
                </Link>
                <Link to="https://www.instagram.com/">
                    <img  
                        src="/instagram.png"
                        width="50"
                        className="d-inline-block align-top"
                        alt="Instagram icon"
                    />
                </Link> 
            </Col>
            <Col className="copyright" sm={10}>
                <p>Copyright &copy; Holidaze 2020</p>
            </Col>
        </Row>
    )
}

export default Footer;