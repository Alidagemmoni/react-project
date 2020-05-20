import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BASE_URL, headers } from "../../constants/api";


function HotelSpecific(props) {
    const [hotel, setHotel] = useState({});

    useEffect(() => {
        const id = props.match.params.id
        const url = BASE_URL + "establishments/" + id;
        async function fetchHotel() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => setHotel(data))
        }
        fetchHotel();
        console.log(hotel)
    }, [])
    
    return (
        <Container>
            
            <Row>
                <Col>
                    <h2>{hotel.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Card.Img variant="top" src={hotel.image}/>
                </Col>
                <Col sm={7}>
                    <article>
                        <Row>
                            <Col>
                                <p>Max guests</p>
                            </Col>
                            <Col>{hotel.maxGuests}</Col> 
                        </Row>
                        <Row>
                            <Col>
                                <p>Price</p>
                            </Col>
                            <Col>{hotel.price}</Col> 
                        </Row>
                        <Row>
                            <Col>
                                <p>Self-catering</p>
                            </Col>
                            <Col>{`${hotel.selfCatering}`}</Col> 
                        </Row>
                        <Row>
                            <Col>
                                <p>Email</p>
                            </Col>
                            <Col>{hotel.email}</Col> 
                        </Row>
                        <Row>
                            <Col>
                                <p>Description</p> 
                            </Col>
                            <Col>{hotel.description}</Col> 
                        </Row> 
                    </article>                    
                    <Button variant="primary">Book now</Button>
                </Col>
            </Row>
        </Container>
    );
}


export default HotelSpecific;