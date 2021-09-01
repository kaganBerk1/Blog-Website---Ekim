import React, { Component } from "react";

import FormInputs from "./FormInputs";
import "./login.css"
import Joi from "joi-browser";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
      submitSuccessfully: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }




  handleSubmit(e) {
    e.preventDefault();

    console.log("Form Submitted.");

    this.setState({ submitSuccessfully: true });
  }



  handleInputChange({ currentTarget }) {
    const errors = { ...this.state.errors };


    this.setState({ [currentTarget.name]: currentTarget.value, errors });
  }
  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
{/*         {this.state.submitSuccessfully && (
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Form has been submitted!</h4>
            <p>
              You have successfully submitted the form. You will be redirected
              shortly.
            </p>
            <hr />
            <p class="mb-0">
              You will be loggedin as *username* and other users will see this
              name.
            </p>
          </div>
        )} */}
        <FormInputs
          onChange={this.handleInputChange}
          errors={this.state.errors}
          value={this.state.username}
          htmlForId="username"
          type="text"
          label="Username"
          className="form"

        />
        <FormInputs
          onChange={this.handleInputChange}
          errors={this.state.errors}
          value={this.state.password}
          htmlForId="password"
          type="password"
          label="Password"
          className="form"

        />
        <button  className="btn btn-primary" style={{marginTop:"20px"}}>
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
