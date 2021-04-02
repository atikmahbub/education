import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>You are a...*</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Parent</option>
              <option>School</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Type of tutoring*</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>1-on-1</option>
              <option>Group</option>
              <option>i'm not sure</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Label>Subject*</Form.Label>
          <Form.Check
            type="checkbox"
            label=" Academic Math (i.e. Algebra, Calculus)"
          />
          <Form.Check
            type="checkbox"
            label="  Competition Math (i.e. UIL, TMSCA)"
          />
          <Form.Check
            type="checkbox"
            label="Standardized Test (i.e. SAT, ACT)"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message*</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" className="green-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
