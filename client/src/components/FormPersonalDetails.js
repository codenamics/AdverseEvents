import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div class="grid grid-form">
        <div class="col col-left flex">
          <div className="container">
            <div className="wizard">
              <div className="a">Personal data</div>
              <div />
              <div />
            </div>
            <label htmlFor="name"> Name </label>
            <div class="input-field">
              <input
                required
                placeholder="Name"
                id="name"
                type="text"
                class="validate"
                onChange={handleChange("name")}
                defaultValue={values.name}
              />
            </div>
            <label htmlFor="lastname"> Lastname </label>
            <div className="input-field">
              <input
                required
                placeholder="Last Name"
                id="lastname"
                type="text"
                class="validate"
                onChange={handleChange("lastname")}
                defaultValue={values.lastname}
              />
            </div>
            <label htmlFor="email"> Email </label>
            <div>
              <input
                required
                id="email"
                placeholder="user@domain.com"
                type="email"
                class="validate"
                onChange={handleChange("email")}
                defaultValue={values.email}
              />
            </div>
            <label htmlFor="location"> Location </label>
            <div className="input-field">
              <input
                required
                id="location"
                placeholder="Location"
                type="text"
                class="validate"
                onChange={handleChange("location")}
                defaultValue={values.location}
              />
            </div>
            <label htmlFor="phone"> Phone </label>
            <div className="input-field">
              <input
                required
                id="phone"
                type="tel"
                placeholder="e.g +48 999-999-9999"
                class="validate"
                onChange={handleChange("phone")}
                defaultValue={values.phone}
              />
            </div>
            <div className="flex">
              {values.name === "" ||
              values.lastname === "" ||
              values.email === "" ||
              values.phone === "" ||
              values.location === "" ? (
                <button
                  disabled
                  class="waves-effect waves-light btn blue darken-1"
                  onClick={this.continue}
                >
                  Continue
                </button>
              ) : (
                <button
                  class="waves-effect waves-light btn ml-1 blue darken-1"
                  onClick={this.continue}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col col-right" />
      </div>
    );
  }
}

export default FormPersonalDetails;
