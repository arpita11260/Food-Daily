// 
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contract = () => {
  return (
    <div>
      <h1 className='text-warning mt-5'>Contact Us</h1>
   <div className='row mt-5 border border-2 border-warning p-5 bg-dark'>
  <div className='col-6'>
  <Form className='text-primary bg-dark'>
              <Row>
                <Col sm>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicText"
                  >
                    <Form.Label className='text-white'>Your Name </Form.Label>
                    <Form.Control className='w-100'
                  
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className='text-white'>Your Email </Form.Label>
                    <Form.Control className='w-100 '
                  //  className='my-3'
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Label className='text-white mt-2'>Your Issues</Form.Label>
              <Form.Control
             className='w-75 m-3 p-4'
                type="text"
                placeholder="Write Your Issues..."
              />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className='text-white'>Your Comment</Form.Label>
                <Form.Control
                 
                  placeholder="Write you message..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button className="mb-5 px-4" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
  </div>
  <div className='col-6'>
  <video className='w-100' playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
  </video> </div>
</div>

    </div>
  );
};

export default Contract;