import React, { useState } from "react";
import EstbForm from "./EstbForm";
import { Col, Row, Container } from 'react-bootstrap';
import { BASE_URL, headers } from "../../../constants/api";

const CreateEstb = (props) => {
    const [ estb, setEstb ] = useState({
        name: "",
        email: "",
        image: "",
        price: "",
        maxGuests: "",
        lat: "",
        lng: "",
        selfCatering: false,
        description: ""
    });

    const [submit, setSubmit] = useState(false);

    function submitEstb(event) {
        const url = BASE_URL + "establishments";
        const options = { headers, method: "POST", body: JSON.stringify(estb) };
        fetch (url, options)
        .then(res => res.status === 201 && setSubmit(true)); 
    }

    return (
        <Container>
            <Col lg={10}>
                <Row className="margin">
                    <Col>
                        {
                            submit ? <h2>Your establishment has been sent!</h2>
                            : <h2>Create a new establishment</h2>
                        }
                    </Col>
                </Row>
                        {
                            submit ? null :
                            <EstbForm 
                                submitEstb={submitEstb}
                                estb={estb}
                                setEstb={setEstb}
                            />
                        }
            </Col>
        </Container>
    )
}

export default CreateEstb;