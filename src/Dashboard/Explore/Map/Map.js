import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';

function Map() {

  return (
<div className='row mt-5 border border-2 border-warning p-5 bg-dark'>
  <div className='col-6'>
  <Form className='bg-dark text-primary p-3'>
 
    <Form.Group controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control className='w-75 mb-2' type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formGrid">
      <Form.Label>Delivery-place</Form.Label>
      
      <Form.Select className='w-75' defaultValue="Choose...">
  <option>Rides</option>
  <option>Quirer</option>
  <option>Parcel</option>

</Form.Select>
    </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control className="w-75 mb-2" placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group  controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control className="w-75 mb-2" placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row >
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group className="w-75 mb-2" as={Col} controlId="formGridState">
    
      <Form.Label>State</Form.Label>
<Form.Select defaultValue="Choose...">
  <option>Chatrogram</option>
  <option>Dhaka</option>
  <option>Rajshahi</option>
  <option>Barisal</option>
  <option>Khulna</option>
  <option>Cumilla</option>
</Form.Select>
    </Form.Group>

    <Form.Group className="w-75 mb-2" as={Col} controlId="formGridZip">
      <Form.Label>Zip-code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

 
  <Button className="m-2" variant="primary" type="submit">
    Order Place
  </Button>
</Form>
  </div>
  <div className='col-6'>
<div className='row mb-2 '>
  <div className='col-1'><FontAwesomeIcon className="text-primary " icon={faSearch}/> </div>
 <div className='col-11'><Form.Control className='w-75 border border-3 border-primary' placeholder="Serch..." /></div></div>
<img className='w-100 border border-3 border-primary' src='https://raw.githubusercontent.com/AdvancedCustomFields/docs/master/assets/acf-google-map-field-interface.png'/>
  </div>
</div>
  );
};


export default Map;

