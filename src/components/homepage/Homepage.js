import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from 'react-bootstrap/InputGroup';


function HomePage() {
    return (
        <Container>
            <Row>
                <Col className="margin">
                    <h2 className="search-header">Search hotels</h2>
                </Col>
                <Col xs={6}>
                    <InputGroup className="mb-3 border search margin">
                        <FormControl
                            placeholder="Search hotels..."
                            aria-label="Search hotels..."
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <section>
                        <img
                            src="/travel.jpg"
                            width="100%"
                            className="d-inline-block align-top"
                            alt="Holidaze Logo"
                        />
                        <Button className="btn">See all hotels</Button>
                    </section>
                </Col>
                <Col/>
            </Row>
        </Container>
    );
}

export default HomePage;

{/* 
<h1 className="search-header">Search hotels</h1>
        <Card className="scale border">
            <Card.Img variant="top" src="HolidazeLogo.svg/100px180" />
            <Button className="btn">See all hotels</Button>
        </Card> */}