import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { BASE_URL, headers } from "../../../constants/api";

const RespondModal = ({ handleClose, open, response, setResponse }) => {
    const [show, setShow] = useState(open);


    return (
        <> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Respond</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                        <Form.Label>Respond to... </Form.Label>
                            <Form.Control
                             as="textarea"
                             rows="5"
                             placeholder="Write message here..."
                             value={response.message}
                             onChange={(e) => setResponse({...response, message: e.target.value})}
                            />
                        </Form.Group>
                    </Form>   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(false, null)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleClose(false, null)}>
                        Send Message
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RespondModal;