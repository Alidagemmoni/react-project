import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BookForm from './BookForm';
import { BASE_URL, headers } from "../../constants/api";

function BookHotel(props) {
    const [ enquiry, setEnquiry ]  = useState({
        firstName: "",
        lastName: "",
        establishmentId: props.match.params.id,
        email: "",
        checkIn: "",
        checkOut: ""
    });
    const [submit, setSubmit] = useState(false);

    const data = {
        name: enquiry.firstName + " " + enquiry.lastName,
        email: enquiry.email,
        establishmentId: enquiry.establishmentId,
        checkIn: enquiry.checkIn,
        checkOut: enquiry.checkOut
    }; 
  
    const history = useHistory();

    function submitEnquiry(event) {

        const url = BASE_URL + "enquiries";
        
        const options = { headers, method: "POST", body: JSON.stringify(data) };

        fetch (url, options)
        .then(res => res.status === 201 && setSubmit(true));
    }

return (
        <Container>
            <Col lg={8}>
                <Row className="margin">
                    <Col>
                        {
                            submit ? <h2>Your enquiry has been sent!</h2>
                            : <h2>Book {localStorage.getItem("hotelName")} </h2>
                        }
                    </Col>
                </Row>
                        {
                            submit ? null :
                            <BookForm 
                                submitEnquiry={submitEnquiry}
                                enquiry={enquiry}
                                setEnquiry={setEnquiry}
                            />
                        }
            </Col>
        </Container>
    )
}

export default BookHotel;