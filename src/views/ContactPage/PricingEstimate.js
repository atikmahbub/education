import React from "react";
import { Form, Col } from "react-bootstrap";
import { AcademicLevelData, courseFieldData } from "../../utils/data/data";

const PricingEstimate = () => {
  return (
    <div className="contact-form">
      <Form>
        <Form.Group as={Col}>
          <Form.Label>Academic Level:</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            {AcademicLevelData.map((item) => (
              <option>{item}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Course Field:</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            {courseFieldData.map((item) => (
              <option>{item}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <div className="pricing-estimate">
        <div>Price Starting At:</div>
        <div>
          <span style={{ marginRight: "7px" }}>$</span> 75.00 /hour
        </div>
      </div>
    </div>
  );
};

export default PricingEstimate;
