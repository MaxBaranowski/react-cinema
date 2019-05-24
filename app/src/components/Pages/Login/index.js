import React, {Component} from "react";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";

import "./styles.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: ""
    };
  }
  
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  
  handleSubmit = event => {
    event.preventDefault();
  };
  
  render() {
    return (
      // make smth like hear: https://www.imageshack.us/signup
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
  
}