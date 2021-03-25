import React from 'react'
import {Form, Button} from 'react-bootstrap'

const FormPage = () => {
    return (
        <div className="container formpage">
            <div className="row">
                <div className="col-md-6 col-sm-12 p-4">
                    <div className="h4 text-center font-weight-bold"> Want to keep up with our updates? </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 col-sm-10 mt-4">
                            <Form.Control size="lg" type="text" placeholder="First Name" />
                        </div>
                        <div className="col-md-6 col-sm-10 mt-4">
                            <Form.Control size="lg" type="text" placeholder="Last Name" />
                        </div>
                        <div className="col-md-6 col-sm-10 mt-4">
                            <Form.Control size="lg" type="text" placeholder="Email Address" />
                        </div>
                    </div>
                    <div>
                        <Button size="lg" className="signup-button">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage
