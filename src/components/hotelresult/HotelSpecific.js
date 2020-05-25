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
                <Col className="margin">
                    <h2 className="header">{hotel.name}</h2>
                </Col>
            </Row>
            <Row className="bg-specific">
                <Col sm={4}>
                    <Card.Img variant="top" className="img-specific" src={hotel.image}/>
                </Col>
                <Col sm={7}>
                    <article className="bg-specific"> 
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
                    <Button className="button" onClick={() => localStorage.setItem("hotelName", hotel.name)} href={`/bookhotel/${hotel.id}`}>Book now</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default HotelSpecific;