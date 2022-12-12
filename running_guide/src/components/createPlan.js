import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

function CreatePlan(){

  return (
    <Container>
      <Form className = "planForm">
        <Row>
            <Form.Group as = {Col} class = "w-50 p-3 rounded">
                <Form.Label>Number of Runs Each Week:</Form.Label>
                <Form.Control type="number" placeholder="Ex: 4 runs/week" />
            </Form.Group>
            <Form.Group as = {Col}>
                <Form.Label>Distance Training For:</Form.Label>
                <Form.Control type="number" placeholder="Ex: 13.1 mi" />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as = {Col}>
                <Form.Label>Avg. Pace:</Form.Label>
                <Form.Control type="number" placeholder="Ex: 10 min/mi" />
            </Form.Group>
            <Form.Group as = {Col}>
                <Form.Label>Avg. Elevation Gain Per Run:</Form.Label>
                <Form.Control type="number" placeholder="Ex: 500 ft" />
            </Form.Group>
        </Row>
        <Form.Group>
          <Form.Label>Avg. Time on Feet:</Form.Label>
          <Form.Control type="number" placeholder="Ex: 30 min" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Submit
        </Button>
      </Form>
      </Container>
  );
}

export default CreatePlan