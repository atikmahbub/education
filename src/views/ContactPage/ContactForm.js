import React, { useReducer, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { API } from "../../config/API";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  loading: true,
  error: null,
  success: null,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_DATA_SUCCESS":
      return {
        loading: false,
        error: null,
        success: true,
      };
    case "SUBMIT_DATA_ERROR":
      return {
        loading: false,
        error: "SomeThing Went Wrong",
      };
  }
};

const intialFormData = {
  FirstName: "",
  LastName: "",
  Email: "",
  TypeOfTutoring: "",
  YouAreA: "",
  Subject: {
    AcademicMath: false,
    CompetitionMath: false,
    StandardizedTest: false,
  },
  Message: "",
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [formData, setFormData] = useState(intialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("Online_Math_Tutoring.json/", formData)
      .then((response) => {
        dispatch({ type: "SUBMIT_DATA_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "SUBMIT_DATA_ERROR" });
      });
  };

  useEffect(() => {
    if (state.success) {
      toast.error("thanks for being with us!");
      setFormData(intialFormData);
    }
    if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="contact-form">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  FirstName: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  LastName: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Control
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setFormData({
                ...formData,
                Email: e.target.value,
              });
            }}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>You are a...*</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  YouAreA: e.target.value,
                });
              }}
            >
              <option>Choose...</option>
              <option>Parent</option>
              <option>School</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Type of tutoring*</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => {
                setFormData({
                  ...formData,
                  TypeOfTutoring: e.target.value,
                });
              }}
            >
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
            onChange={(e) => {
              setFormData({
                ...formData,
                Subject: {
                  ...formData.Subject,
                  AcademicMath: e.target.checked,
                },
              });
            }}
          />
          <Form.Check
            type="checkbox"
            label="  Competition Math (i.e. UIL, TMSCA)"
            onChange={(e) => {
              setFormData({
                ...formData,
                Subject: {
                  ...formData.Subject,
                  CompetitionMath: e.target.checked,
                },
              });
            }}
          />
          <Form.Check
            type="checkbox"
            label="Standardized Test (i.e. SAT, ACT)"
            onChange={(e) => {
              setFormData({
                ...formData,
                Subject: {
                  ...formData.Subject,
                  StandardizedTest: e.target.checked,
                },
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => {
              setFormData({
                ...formData,
                Message: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="green-button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
