import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const RespondModal = ({ handleModalAction, handleSubmit, open, response, setResponse }) => {
    const [show, setShow] = useState(open);
    return (
        <> 
            <Modal show={show}>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Respond to {response.name}</Form.Label>
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
                    <Button variant="secondary" onClick={() => handleModalAction(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Send Message
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RespondModal;