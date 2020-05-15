import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function HomePage() {
    return (
        <>
        <h1 className="search-header">Search hotels</h1>
        <Card className="scale border">
            <Card.Img variant="top" src="HolidazeLogo.svg/100px180" />
            <Button className="btn">See all hotels</Button>
        </Card>
        </>
    );
}

export default HomePage;