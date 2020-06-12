import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Spinner} from 'react-bootstrap';
import { BASE_URL, headers } from "../../constants/api";

function HotelSpecific(props) {
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {  
        const id = props.match.params.id
        const url = BASE_URL + "establishments/" + id;
        async function fetchHotel() {
            await fetch(url, {headers})
            .then(res => res.json())
            .then(data => {
                setHotel(data)
                setLoading(false);
            })
        }
        fetchHotel();
    }, []);

    const RenderHotelDetail = () => (
        <>
            <Row>
                <Col className="margin">
                    <h2 className="header">{hotel.name}</h2>
                </Col>
            </Row>
            <Row className="bg-specific">
                <Col lg={6} className="pl-0 pr-0">
                    <Card.Img variant="top" src={hotel.image}/>
                </Col>
                <Col>
                    <Row>
                            <Col>
                                <p className="hotel-specific">Price per night:</p>
                            </Col>
                            <Col className="specific-info">{hotel.price}$</Col> 
                        </Row>
                        <Row> 
                            <Col>
                                <p className="hotel-specific">Max guests:</p>
                            </Col>
                            <Col className="specific-info">{hotel.maxGuests}</Col> 
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
                        <Row>
                            <Col>
                                <p className="hotel-specific">{hotel.description}</p>    
                            </Col>
                        </Row>
                </Col>
                <Button className="button-specific" block lg={1} onClick={() => localStorage.setItem("hotelName", hotel.name)} href={`/bookhotel/${hotel.id}`}>Book now</Button>
            </Row> 
        </>
    )

    return (
        <Container>
            {
                loading ?
                <Spinner animation="grow" />
                :
                <RenderHotelDetail />
            }
        </Container>
    );
}

export default HotelSpecific;