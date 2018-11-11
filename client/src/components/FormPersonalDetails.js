import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div class="container">
        <div className="row x-center ">
          <div class="col l6 s12 m-lr-auto">
            <div class="input-field">
              <input
                required
                placeholder="Name"
                id="name"
                type="text"
                class="validate"
                onChange={handleChange("name")}
                defaultValue={values.name}
              />{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                placeholder="Last Name"
                id="lastname"
                type="text"
                class="validate"
                onChange={handleChange("lastname")}
                defaultValue={values.lastname}
              />{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                id="location"
                placeholder="Location"
                type="text"
                class="validate"
                onChange={handleChange("location")}
                defaultValue={values.location}
              />{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                id="phone"
                type="text"
                placeholder="Phone"
                class="validate"
                onChange={handleChange("phone")}
                defaultValue={values.phone}
              />{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                id="email"
                placeholder="Email"
                type="email"
                class="validate"
                onChange={handleChange("email")}
                defaultValue={values.email}
              />{" "}
            </div>{" "}
            {values.name === "" ||
            values.lastname === "" ||
            values.email === "" ||
            values.phone === "" ||
            values.location === "" ? (
              <a
                disabled
                class="waves-effect waves-light btn"
                onClick={this.continue}
              >
                Continue{" "}
              </a>
            ) : (
              <a class="waves-effect waves-light btn" onClick={this.continue}>
                Continue{" "}
              </a>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default FormPersonalDetails;
