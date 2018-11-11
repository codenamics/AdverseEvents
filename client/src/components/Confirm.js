import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.submitData();
  };
  back = e => {
    e.preventDefault();
    this.props.previousStep();
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
            <ul class="collection">
              <li class="collection-item flex justify-sb">
                {" "}
                <div>Name:</div> <div>{name}</div>{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Last Name:</div> {lastname}{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Email:</div>
                <div>{email}</div>{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Phone:</div>
                <div>{phone}</div>{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Location</div>
                <div>{location}</div>{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Date:</div> <div>{date} </div>
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Drug:</div> <div>{drug}</div>{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Batch:</div>
                <div>{batch}</div>{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Outcome:</div>
                <div>{outcome}</div>{" "}
              </li>{" "}
              <li class="collection-item flex justify-sb">
                <div>Detials:</div>
                <div>{details}</div>{" "}
              </li>{" "}
            </ul>{" "}
            <button
              href="#"
              class="waves-effect waves-light btn"
              onClick={this.back}
            >
              Back" "}
            </button>
            <button
              href="#"
              class="waves-effect waves-light btn"
              onClick={this.continue}
            >
              Continue{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default FormPersonalDetails;
