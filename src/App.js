import React from 'react'
import {Container,InputGroup,Form,FloatingLabel,Row,Col,Button} from 'react-bootstrap'
import { useState } from 'react';
const App = () => {
 
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <>
      <div className='p-3 fdiv'>
        <Container className='my border shadow-lg rounded'>
    
          <Col md="12 " className='mycol d-flex justify-content-center align-items-center rounded'><h4>Welcome to Gp & Co.</h4></Col>
      
      <Form className='px-4 pt-2 pb-5 bg-white' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-1 mt-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Full name"
    className="mb-3">
    <Form.Control required type="text" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter full name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
      
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3">
    <Form.Control required type="email" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter the email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
          </Form.Group>
        </Row>

        <Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Phone"
    className="mb-3">
    <Form.Control required type="number" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
      
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Permanent address"
    className="mb-3">
    <Form.Control required type="text" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter the permanent address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
          </Form.Group>
       
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Adhaar Number"
    className="mb-3">
    <Form.Control required type="number" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter adhaar number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
      
          </Form.Group> 
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Pan Number"
    className="mb-3">
    <Form.Control required type="text" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter pan card number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </FloatingLabel>
      
          </Form.Group> 
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Challan Number"
    className="mb-3">
    <Form.Control  type="text" placeholder="name@example.com" />
    <Form.Control.Feedback type="invalid">
                Please enter challan number.
              </Form.Control.Feedback>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
  </FloatingLabel>
      
          </Form.Group> 
        </Row>
      <Row className='mb-3'>
      <Form.Group as={Col} md="4" controlId="formFile" className="mb-3">
    <Form.Label>Uplaod adhaard</Form.Label>
    <Form.Control required type="file" /> 
    <Form.Control.Feedback type="invalid">
                Please uplaod adhaard.
              </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="4" controlId="formFile" className="mb-3">
    <Form.Label>Uplaod pan card</Form.Label>
    <Form.Control required type="file" /> 
    <Form.Control.Feedback type="invalid">
                Please uplaod pan card.
              </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="4" controlId="formFile" className="mb-3">
    <Form.Label>Uplaod challan</Form.Label>
    <Form.Control  type="file" /> 
    
  </Form.Group>
      </Row>
        <Button type="submit">Submit form</Button>
      </Form>
      </Container>
      </div>
      </>
    );
}

export default App

