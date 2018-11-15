import React, { Component } from "react";

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
      <div className="grid grid-form">
        <div class="col col-left flex">
          <div className="container">
            <div class="idea-timeline-numbers">
              <span class="idea-timeline-value flex complete-step">1.</span>
              <span class="idea-timeline-value flex complete-step">2.</span>
              <span class="idea-timeline-value flex">3.</span>
            </div>
            <label htmlFor="drug">Drug</label>
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
            </div>
            <label htmlFor="date-start">Start Date of Adverse Event</label>
            <div class="input-field">
              <input
                required
                id="date-start"
                type="date"
                data-placeholder="Start Date"
                class="validate"
                onChange={handleChange("start_date")}
                defaultValue={values.start_date}
              />{" "}
            </div>{" "}
            <label htmlFor="date-end">End Date of Adverse Event</label>
            <div class="input-field">
              <input
                required
                id="date-end"
                type="date"
                data-placeholder="End Date"
                class="validate"
                onChange={handleChange("end_date")}
                defaultValue={values.end_date}
              />{" "}
            </div>{" "}
            <label htmlFor="Batch">Batch</label>
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
            <label>
              Outcome:
              <select
                defaultValue={values.outcome}
                onChange={handleChange("outcome")}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="Recovered">Recovered</option>
                <option value="Getting better">Getting better</option>
                <option value="Continue side-effects">
                  Continue side-effects
                </option>
                <option value="Death">Death</option>
                <option value="Unknown">Unknown</option>
              </select>
            </label>
            <label htmlFor="textarea1">Detials</label>
            <div className="input-field">
              <textarea
                id="textarea1"
                class="materialize-textarea validate"
                placeholder="Details"
                required
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
            <div className="flex">
              <button
                class="waves-effect waves-light btn blue darken-1"
                onClick={this.back}
              >
                Back
              </button>
              {values.date === "" ||
              values.drug === "" ||
              values.batch === "" ||
              values.outcome === "" ||
              values.details === "" ||
              values.start_date === "" ||
              values.end_date === "" ? (
                <button disabled className="ml-20" onClick={this.continue}>
                  Continue{" "}
                </button>
              ) : (
                <button className="ml-20" onClick={this.continue}>
                  Continue{" "}
                </button>
              )}
            </div>{" "}
          </div>
        </div>{" "}
        <div className="col col-right" />
      </div>
    );
  }
}

export default FormAdverseEvent;
