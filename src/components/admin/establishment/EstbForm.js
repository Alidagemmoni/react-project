import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const EstbForm = (props) => {
    return (
        <section className="bg-specific">
            <Form style={{ padding: "20px" }}>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label className="create-estb-text" column sm={2}>Establishment</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="name"
                            value={props.estb.name}
                            onChange={(event) => props.setEstb({ ...props.estb, name: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label className="create-estb-text" column sm={2}>Email</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="email"
                            value={props.estb.email}
                            onChange={(event) => props.setEstb({ ...props.estb, email: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalImage">
                    <Form.Label className="create-estb-text" column sm={2}>Image Url</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="name"
                            value={props.estb.image}
                            onChange={(event) => props.setEstb({ ...props.estb, image: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPrice">
                    <Form.Label className="create-estb-text" column sm={2}>Price per night</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="number"
                            value={props.estb.price}
                            onChange={(event) => props.setEstb({ ...props.estb, price: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDate">
                    <Form.Label className="create-estb-text" column sm={2}>Max guests</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="number"
                            value={props.estb.maxGuests}
                            onChange={(event) => props.setEstb({ ...props.estb, maxGuests: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDate">
                    <Form.Label className="create-estb-text" column sm={2}>Latitude</Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            type="text"
                            value={props.estb.lat}
                            onChange={(event) => props.setEstb({ ...props.estb, lat: event.target.value })}
                        />
                    </Col>
                    <Form.Label className="create-estb-text" column sm={2}>Longitude</Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            type="text"
                            value={props.estb.lng}
                            onChange={(event) => props.setEstb({ ...props.estb, lng: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label className="create-esbt-text" column sm={2}>Description</Form.Label>
                    <Col sm={6}>
                        <Form.Control as="textarea" rows="4"
                            value={props.estb.description}
                            onChange={(event) => props.setEstb({ ...props.estb, description: event.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDate">
                    <Form.Label column sm={2} />
                    <Form.Check
                        className="create-esbt-text"
                        type="checkbox"
                        label="Self Catering"
                        checked={props.estb.selfCatering}
                        onChange={(event) => props.setEstb({ ...props.estb, selfCatering: !props.estb.selfCatering })}
                    />
                </Form.Group>
            </Form>
            <Button onClick={props.submitEstb} className="button" block >Submit establishment</Button>
        </section>
    )
}

export default EstbForm;