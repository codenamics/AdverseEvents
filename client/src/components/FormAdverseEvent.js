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
                placeholder="Date"
                required
                id="date"
                type="date"
                placeholder="Date"
                class="validate"
                onChange={handleChange("date")}
                defaultValue={values.date}
              />{" "}
              <span
                class="helper-text"
                data-error="Field is required"
                data-success=""
              />
            </div>{" "}
            <div className="input-field">
              <input
                placeholder="Drug"
                required
                id="drug"
                type="text"
                class="validate"
                onChange={handleChange("drug")}
                defaultValue={values.drug}
              />
              <span
                class="helper-text"
                data-error="Field is required"
                data-success=""
              />
            </div>{" "}
            <div className="input-field">
              <input
                placeholder="Batch"
                required
                id="batch"
                type="text"
                class="validate"
                onChange={handleChange("batch")}
                defaultValue={values.batch}
              />{" "}
              <span
                class="helper-text"
                data-error="Field is required"
                data-success=""
              />
            </div>{" "}
            <div className="input-field">
              <input
                placeholder="Outcome"
                required
                id="outcome"
                type="text"
                class="validate"
                onChange={handleChange("outcome")}
                defaultValue={values.outcome}
              />{" "}
              <span
                class="helper-text"
                data-error="Field is required"
                data-success=""
              />
            </div>{" "}
            <div className="input-field">
              <textarea
                id="textarea1"
                class="materialize-textarea validate"
                placeholder="Details"
                required
                id="details"
                type="text"
                onChange={handleChange("details")}
                defaultValue={values.details}
              />
              <span
                class="helper-text"
                data-error="Field is required"
                data-success=""
              />
            </div>
            <div className="center-align">
              <a
                class="waves-effect waves-light btn blue darken-1"
                onClick={this.back}
              >
                Back
              </a>
              {values.date === "" ||
              values.drug === "" ||
              values.batch === "" ||
              values.outcome === "" ||
              values.details === "" ? (
                <a
                  disabled
                  class="waves-effect waves-light btn ml-1 blue darken-1"
                  onClick={this.continue}
                >
                  Continue{" "}
                </a>
              ) : (
                <a
                  class="waves-effect waves-light btn ml-1 blue darken-1"
                  onClick={this.continue}
                >
                  Continue{" "}
                </a>
              )}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default FormAdverseEvent;
