import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
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
                    <h2 className="header margin">All our hotels</h2>
                </Col>
            </Row>
            {
                list.length ?
                list.map((hotel) => (
                    <Row key={hotel.id} className="bg-specific">
                        <Col sm={4}>
                            <Card.Img variant="top" src={hotel.image}/>
                        </Col>
                        <Col sm={7}>
                            <Row>
                                <Col>
                                    <h2>{hotel.name}</h2>
                                </Col>            
                            </Row>
                            <Row>
                                <Col>
                                    <p>Guests: &nbsp; {hotel.maxGuests}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Per night: &nbsp; {hotel.price}</p>
                                </Col> 
                                <Col>
                                    <Button className="button"  href={`/hotelspecific/${hotel.id}`}>Choose</Button>
                                </Col>
                            </Row>                  
                        </Col>
                    </Row>
                    ))
                    : <Spinner animation="grow" />
                }
        </Container>
    );
}

export default HotelList; 
