import React from "react";
import { useForm } from 'react-hook-form';
import { Form, Col, Row, Button } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Please enter name of establishment"),
    email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
    image: yup.string().required("Please enter a correct image URL"),
    price: yup.number().typeError().required("Please enter a valid price"),
    guests: yup.number().typeError().required("Please enter how many guests"),
    description: yup.string().required("Please enter a message").min(10, "Description must be longer than 10 characters"),
});

const EstbForm = (props) => {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
    });

    return (  
        <section className="bg-specific">
            <Form style={{ padding: "20px" }}>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label className="create-estb-text" column sm={2}>Establishment</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="name"
                            ref={register}
                            value={props.estb.name}
                            onChange={(event) => props.setEstb({ ...props.estb, name: event.target.value })}
                        />
                        {errors.name && <Form.Text className="form-message">{errors.name.message}</Form.Text>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label className="create-estb-text" column sm={2}>Email</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="email"
                            ref={register}
                            value={props.estb.email}
                            onChange={(event) => props.setEstb({ ...props.estb, email: event.target.value })}
                        />
                        {errors.email && <Form.Text className="form-message">{errors.email.message}</Form.Text>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalImage">
                    <Form.Label className="create-estb-text" column sm={2}>Image Url</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="text"
                            ref={register}
                            value={props.estb.image}
                            onChange={(event) => props.setEstb({ ...props.estb, image: event.target.value })}
                        />
                        {errors.image && <Form.Text className="form-message">{errors.image.message}</Form.Text>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPrice">
                    <Form.Label className="create-estb-text" column sm={2}>Price per night</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="number"
                            ref={register}
                            value={props.estb.price}
                            onChange={(event) => props.setEstb({ ...props.estb, price: event.target.value })}
                        />
                        {errors.price && <Form.Text className="form-message">{errors.price.message}</Form.Text>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDate">
                    <Form.Label className="create-estb-text" column sm={2}>Max guests</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type="number"
                            ref={register}
                            value={props.estb.maxGuests}
                            onChange={(event) => props.setEstb({ ...props.estb, maxGuests: event.target.value })}
                        />
                        {errors.guests && <Form.Text className="form-message">{errors.guests.message}</Form.Text>}
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
                            ref={register}
                            value={props.estb.description}
                            onChange={(event) => props.setEstb({ ...props.estb, description: event.target.value })} 
                        />
                        {errors.description && <Form.Text className="form-message">{errors.description.message}</Form.Text>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalDate">
                    <Form.Label className="create-esbt-text" column sm={2} />
                    <Form.Check
                        type="checkbox"
                        label="Self-Catering"
                        checked={props.estb.selfCatering}
                        onChange={(event) => props.setEstb({ ...props.estb, selfCatering: !props.estb.selfCatering })}
                    />
                </Form.Group>
            </Form>
            <Button onClick={handleSubmit(props.submitEstb)} className="button" block>Submit establishment</Button>
        </section>
    )
}

export default EstbForm;