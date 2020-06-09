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
                                <p className="hotel-specific">Max guests:</p>
                            </Col>
                            <Col className="specific-info">{hotel.maxGuests}</Col> 
                        </Row>
                        <Row>
                            <Col>
                                <p className="hotel-specific">Price per night:</p>
                            </Col>
                            <Col className="specific-info">{hotel.price}$</Col> 
                        </Row>
                        <Row>
                            <Col>
                                <p className="hotel-specific">Included self-catering:</p>
                            </Col>
                            <Col className="specific-info">{`${hotel.selfCatering}`}</Col> 
                        </Row>
                        <Row>
                            <Col>
                                <p className="hotel-specific">Email:</p>
                            </Col>
                            <Col className="specific-info">{hotel.email}</Col> 
                        </Row> 
                    </article>
                    <Row>
                        <Col className="hotel-specific">{hotel.description}</Col> 
                        <Button className="button-specific" onClick={() => localStorage.setItem("hotelName", hotel.name)} href={`/bookhotel/${hotel.id}`}>Book now</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default HotelSpecific;