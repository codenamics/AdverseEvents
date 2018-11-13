import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.submitData();
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
        date,
        drug,
        batch,
        outcome,
        details
      },
      errors
    } = this.props;
    console.log(errors);
    return (
      <div class="container">
        <div className="row x-center ">
          <div class="col l6 s12 m-lr-auto">
            {this.props.success}
            <ul class="collection">
              <li class="collection-item flex justify-sb">
                {" "}
                <div> Name: </div> <div>{name}</div>
              </li>{" "}
              {errors.name ? (
                <li className="collection-item red-text">{errors.name}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Last Name: </div> {lastname}{" "}
              </li>{" "}
              {errors.lastname ? (
                <li className="collection-item red-text">{errors.lastname}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Email: </div> <div> {email} </div>{" "}
              </li>{" "}
              {errors.email ? (
                <li className="collection-item red-text">{errors.email}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Phone: </div> <div> {phone} </div>{" "}
              </li>{" "}
              {errors.phone ? (
                <li className="collection-item red-text">{errors.phone}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Location </div> <div> {location} </div>{" "}
              </li>{" "}
              {errors.location ? (
                <li className="collection-item red-text">{errors.location}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Date: </div> <div>{date} </div>
              </li>{" "}
              {errors.date ? (
                <li className="collection-item red-text">{errors.date}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Drug: </div> <div>{drug}</div>{" "}
              </li>{" "}
              {errors.drug ? (
                <li className="collection-item red-text">{errors.drug}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Batch: </div> <div> {batch} </div>{" "}
              </li>{" "}
              {errors.batch ? (
                <li className="collection-item red-text">{errors.batch}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Outcome: </div> <div> {outcome} </div>{" "}
              </li>{" "}
              {errors.outcome ? (
                <li className="collection-item red-text">{errors.outcome}</li>
              ) : null}
              <li class="collection-item flex justify-sb">
                <div> Detials: </div> <div> {details} </div>{" "}
              </li>{" "}
              {errors.details ? (
                <li className="collection-item red-text">{errors.details}</li>
              ) : null}
            </ul>{" "}
            <div className="center-align">
              <button
                class="waves-effect waves-light btn ml-1 blue darken-1"
                onClick={this.back}
              >
                Back{" "}
              </button>{" "}
              <button
                class="waves-effect waves-light btn ml-1 blue darken-1"
                onClick={this.continue}
              >
                Continue{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default FormPersonalDetails;
