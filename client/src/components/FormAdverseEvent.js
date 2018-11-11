import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

export class FormAdverseEvent extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;

    console.log(values);
    return (
      <div class="container">
        <div className="row x-center ">
          <div class="col l6 s12 m-lr-auto">
            <div class="input-field">
              <input
                required
                id="date"
                type="date"
                placeholder="Date"
                class="validate"
                onChange={handleChange("date")}
                defaultValue={values.date}
              />{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                id="drug"
                type="text"
                class="validate"
                onChange={handleChange("drug")}
                defaultValue={values.drug}
              />
              <label for="drug"> Drug </label>{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                id="batch"
                type="text"
                class="validate"
                onChange={handleChange("batch")}
                defaultValue={values.batch}
              />{" "}
              <label for="batch"> Batch </label>{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                id="outcome"
                type="text"
                class="validate"
                onChange={handleChange("outcome")}
                defaultValue={values.outcome}
              />{" "}
              <label for="outcome"> Outcome </label>{" "}
            </div>{" "}
            <div className="input-field">
              <input
                required
                id="details"
                type="text"
                class="validate"
                onChange={handleChange("details")}
                defaultValue={values.details}
              />{" "}
              <label for="details"> Details </label>{" "}
            </div>{" "}
            <a class="waves-effect waves-light btn" onClick={this.back}>
              Back{" "}
            </a>{" "}
            {values.date === "" ||
            values.drug === "" ||
            values.batch === "" ||
            values.outcome === "" ||
            values.details === "" ? (
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

export default FormAdverseEvent;
