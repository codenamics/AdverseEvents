import React, { Component } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormAdverseEvent from "./FormAdverseEvent";
import Confirm from "./Confirm";
import Success from "./Success";
import axios from "axios";
export class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    lastname: "",
    location: "",
    phone: "",
    email: "",
    date: "",
    drug: "",
    batch: "",
    outcome: "",
    details: ""
  };
  submitData = () => {
    const adverseData = {
      name: this.state.name,
      lastname: this.state.lastname,
      location: this.state.location,
      phone: this.state.phone,
      email: this.state.email,
      date: this.state.date,
      drug: this.state.drug,
      batch: this.state.batch,
      outcome: this.state.outcome,
      details: this.state.details
    };
    axios
      .post("http://localhost:5000/send", adverseData)
      .then(res => console.log(res))
      .then(this.nextStep())
      .catch(errors => console.log(errors));
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const {
      step,
      name,
      lastname,
      location,
      phone,
      email,
      date,
      drug,
      batch,
      outcome,
      details
    } = this.state;
    const values = {
      step,
      name,
      lastname,
      location,
      phone,
      email,
      date,
      drug,
      batch,
      outcome,
      details
    };
    switch (step) {
      case 1:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormAdverseEvent
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            submitData={this.submitData}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
