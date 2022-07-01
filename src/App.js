import React from 'react'
import {Container,InputGroup,Form,FloatingLabel,Row,Col,Button} from 'react-bootstrap'
import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
const App = () => {
 
    const [validated, setValidated] = useState(false);

const [adhaarImg,setAdhaarImg]=useState({})

    const handleAdhaarUpload=(event)=>{

setAdhaarImg(event.target.files[0])
    }
    const validate = values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'email Required';
        setValidated(true)
      } else if(!values.name){
        errors.email = 'email Required';
        setValidated(true)
      }  else if(!values.adhaar){
        errors.email = 'email Required';
        setValidated(true)
      }  else if(!values.pan){
        errors.email = 'email Required';
        setValidated(true)
      }  else if(!values.challan){
        errors.email = 'email Required';
        setValidated(true)
      }  else if(!values.address){
        errors.email = 'email Required';
        setValidated(true)
      } 
    
      return errors;
    };
    const formik = useFormik({
      initialValues: {
        email: '',
        name:"",
        phone:"",
        adhaar:"",
        pan:"",
        challan:"",
        address:""
      },
      validate
      ,
      onSubmit: async(values,{resetForm}) => {
        const adh =new FormData();
        adh.append('adhaarImg',adhaarImg,adhaarImg.name)
        adh.append('email',values.email);
        adh.append('name',values.name);
        adh.append('phone',values.phone);
        adh.append('adhaar',values.adhaar);
        adh.append('pan',values.pan);
        adh.append('adress',values.address);
        adh.append('challan',values.challan);

// const a=axios.post('http://localhost:4000/profile',adh, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// })

alert('thank you')

resetForm({values:""})
setValidated(false)


        
      },
    });

    return (
      <>
      <div className='p-3 fdiv'>
        <Container className='my border shadow-lg rounded'>
    
          <Col md="12 " className='mycol d-flex justify-content-center align-items-center rounded'><h4>Welcome to Gp & Co.</h4></Col>
      
      <Form className='px-4 pt-2 pb-5 bg-white' noValidate validated={validated} encType="multipart/form-data" onSubmit={formik.handleSubmit}>
        <Row className="mb-1 mt-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <FloatingLabel
    controlId="floatingInput"
    label="Full name"
    className="mb-3">
    <Form.Control onChange={formik.handleChange}  value={formik.values.name}   name='name'   required type="text" placeholder="name@example.com" />
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
    <Form.Control  required      type="email"    onChange={formik.handleChange}  value={formik.values.email}   name='email'  
 placeholder="name@example.com" />
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
    <Form.Control onChange={formik.handleChange}  value={formik.values.phone}   name='phone'   required type="number" placeholder="name@example.com" />
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
    <Form.Control onChange={formik.handleChange}  value={formik.values.address}   name='address'   required type="text" placeholder="name@example.com" />
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
    <Form.Control onChange={formik.handleChange}  value={formik.values.adhaar}   name='adhaar'   required type="number" placeholder="name@example.com" />
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
    <Form.Control onChange={formik.handleChange}  value={formik.values.pan}   name='pan'   required type="text" placeholder="name@example.com" />
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
    <Form.Control onChange={formik.handleChange}  value={formik.values.challan}   name='challan'    type="text" placeholder="name@example.com" />
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
    <Form.Control onChange={handleAdhaarUpload} required type="file" /> 
    <Form.Control.Feedback type="invalid">
                Please uplaod adhaard.
              </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="4" controlId="formFile" className="mb-3">
    <Form.Label>Uplaod pan card</Form.Label>
    <Form.Control   required type="file" /> 
    <Form.Control.Feedback type="invalid">
                Please uplaod pan card.
              </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="4"    controlId="formFile" className="mb-3">
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

