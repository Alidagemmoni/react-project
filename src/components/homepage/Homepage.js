import React from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { Typeahead } from "react-bootstrap-typeahead";
import { BASE_URL, headers } from "../../constants/api";

const HomePage = () => {
    const history = useHistory();
    const options = [];
    const url = BASE_URL + 'establishments'
    fetch(url, {headers})
    .then(res => res.json())
    .then(data => {
        data.map((hotel, i) => options.push({name: hotel.name, id: hotel.id}))
    })

    return (
        <Container className="margin"> 
            <Row>
                <Col>
                    <h2 className="search-header">Search hotels</h2>
                </Col>
                <Col lg={6}>
                    <InputGroup>
                        <Typeahead
                            id="type-ahead"
                            labelKey="name"
                            onChange={hotel => history.push(`/hotelspecific/${hotel[0].id}`)}
                            options={options}
                            placeholder="Search hotels..."
                        />
                        <InputGroup.Append>
                        <img 
                            src="/search.png"
                            width="40"
                            alt="Search icon"
                            height="40"
                        />
                        </InputGroup.Append>
                    </InputGroup>
                    <section className="margin">
                        <img
                            src="/travel.jpg"
                            width="100%"
                            alt="Front side of brick house with flowers"
                        />
                        <Button className="btn" href="/hotellist" block>See all hotels</Button>
                    </section>
                </Col>
                <Col/>
            </Row>
        </Container>
    );
}

export default HomePage;