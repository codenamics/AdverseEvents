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

    drug: "",
    start_date: "",
    end_date: "",
    batch: "",
    outcome: "",
    details: "",
    errors: {},

    success: ""
  };
  submitData = () => {
    const adverseData = {
      name: this.state.name,
      lastname: this.state.lastname,
      location: this.state.location,
      phone: this.state.phone,
      email: this.state.email,

      drug: this.state.drug,
      batch: this.state.batch,
      outcome: this.state.outcome,
      details: this.state.details,
      start_date: this.state.start_date,

      end_date: this.state.end_date
    };
    axios
      .post("http://localhost:5000/send", adverseData)
      .then(res =>
        this.setState({
          success: res.data.msg
        })
      )
      .catch(err =>
        this.setState({
          errors: err.response.data
        })
      );
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
  resetErrors = () => {
    this.setState({
      errors: {}
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

      drug,
      batch,
      outcome,
      details,
      errors,
      success,
      start_date,
      end_date
    } = this.state;
    const values = {
      step,
      name,
      lastname,
      location,
      phone,
      email,

      drug,
      batch,
      outcome,
      details,
      start_date,
      end_date
    };
    // eslint-disable-next-line
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
            errors={errors}
            resetErrors={this.resetErrors}
            success={success}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
