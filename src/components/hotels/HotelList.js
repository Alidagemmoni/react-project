import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL, headers } from "../../constants/api";

function HotelList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        const url = BASE_URL + "establishments/";
        async function fetchHotels() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => setList(data))
        }
        fetchHotels();
        
    }, [])  
    
    return (
        <Container>  
            <Row>  
                <Col>
                    <h2 className="margin">All our hotels</h2>
                </Col>
            </Row>
            {  
                list.length ?
                list.map((hotel) => (
                    <Row key={hotel.id} className="bg-specific container-width">
                        <Col lg={3} className="pl-0 pr-0">
                            <Card.Img variant="top" className="hotel-image" src={hotel.image}/>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col>
                                    <h2 className="hotel-name">{hotel.name}</h2>  
                                </Col>            
                            </Row>
                            <Row>
                                <Col>
                                    <p className="hotel-info">Guests: &nbsp; {hotel.maxGuests}</p>
                                </Col>
                            </Row> 
                            <Row>
                                <Col>
                                    <p className="hotel-info">Longitude: &nbsp; {hotel.lng}</p>
                                </Col> 
                            </Row>      
                            <Row>
                                <Col>
                                    <p className="hotel-info">Latitude: &nbsp; {hotel.lat}</p>
                                </Col> 
                            </Row>         
                        </Col>
                        <Col sm={3}>
                            <ListGroup.Item className="hotel-price">Price per night: &nbsp; {hotel.price}$</ListGroup.Item> 
                        </Col>
                        <Button className="choose-button" block href={`/hotelspecific/${hotel.id}`}>Choose</Button>  
                    </Row>
                    ))
                    : <Spinner animation="grow" />
                }
        </Container>
    );
}

export default HotelList; 
