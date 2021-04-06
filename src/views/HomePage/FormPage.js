import React, { useReducer, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
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
};

const FormPage = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [formData, setFormData] = useState(intialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("Sign_Up.json/", formData)
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
    <div className="container formpage">
      <div className="row">
        <div className="col-md-6 col-sm-12 p-4">
          <div className="h4 text-center font-weight-bold">
            {" "}
            Want to keep up with our updates?{" "}
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-sm-10 mt-4">
              <Form.Control
                size="lg"
                type="text"
                placeholder="First Name"
                value={formData.FirstName}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    FirstName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-md-6 col-sm-10 mt-4">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Last Name"
                value={formData.LastName}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    LastName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-md-6 col-sm-10 mt-4">
              <Form.Control
                size="lg"
                type="text"
                value={formData.Email}
                placeholder="Email Address"
                required
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    Email: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              onClick={handleSubmit}
              size="lg"
              className="signup-button"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
