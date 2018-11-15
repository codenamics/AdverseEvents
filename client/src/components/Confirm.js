import React, { Component } from "react";
import { withRouter } from "react-router-dom";
export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.submitData();
    if (this.props.success !== "") {
      this.props.push("/success");
    }
  };
  back = e => {
    e.preventDefault();
    this.props.previousStep();
    this.props.resetErrors();
  };

  render() {
    const {
      values: {
        name,
        lastname,
        email,
        phone,
        location,
        drug,
        batch,
        outcome,
        details,
        start_date,
        end_date
      },
      errors
    } = this.props;
    if (this.props.success) {
      this.props.history.push("/success");
    }
    return (
      <div className="container m-60">
        <div class="idea-timeline-numbers">
          <span class="idea-timeline-value flex complete-step">1.</span>
          <span class="idea-timeline-value flex complete-step">2.</span>
          <span class="idea-timeline-value flex complete-step">3.</span>
        </div>
        <div class="col-con flex flex-column">
          <ul class="collection">
            <li class="collection-item ">
              <div className="item-head"> Name: </div> <div>{name}</div>
              {errors.name ? (
                <span className="error">{errors.name}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Last Name: </div>
              <div> {lastname}</div>
              {errors.lastname ? (
                <span className="error">{errors.lastname}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Email: </div> <div> {email} </div>
              {errors.email ? (
                <span className="error">{errors.email}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Phone: </div> <div> {phone} </div>
              {errors.phone ? (
                <span className="error">{errors.phone}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Location </div>
              <div> {location} </div>
              {errors.location ? (
                <span className="error">{errors.location}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Date: </div> <div>{start_date} </div>
              {errors.start_date ? (
                <span className="error">{errors.start_date}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Date: </div> <div>{end_date} </div>
              {errors.end_date ? (
                <span className="error">{errors.end_date}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Drug: </div> <div>{drug}</div>
              {errors.drug ? (
                <span className="error">{errors.drug}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Batch: </div> <div> {batch} </div>
              {errors.batch ? (
                <span className="error">{errors.batch}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Outcome: </div> <div> {outcome} </div>
              {errors.outcome ? (
                <span className="error">{errors.outcome}</span>
              ) : null}
            </li>
            <li class="collection-item  justify-sb">
              <div className="item-head"> Details: </div> <div> {details} </div>
              {errors.details ? (
                <span className="error">{errors.details}</span>
              ) : null}
            </li>
          </ul>
          <div>
            <button
              class="waves-effect waves-light btn ml-1 blue darken-1"
              onClick={this.back}
            >
              Back
            </button>
            <button
              class="waves-effect waves-light btn ml-1 blue darken-1"
              onClick={this.continue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Confirm);
