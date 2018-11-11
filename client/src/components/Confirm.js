import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

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
          <div class="col s6 m-lr-auto">
            <ul class="collection">
              <li class="collection-item">Name:{name}</li>
              <li class="collection-item">{lastname}</li>
              <li class="collection-item">{email}</li>
              <li class="collection-item">{phone}</li>
              <li class="collection-item">{location}</li>
              <li class="collection-item">{date}</li>
              <li class="collection-item">{drug}</li>
              <li class="collection-item">{batch}</li>
              <li class="collection-item">{outcome}</li>
              <li class="collection-item">{details}</li>
            </ul>
            <a class="waves-effect waves-light btn" onClick={this.continue}>
              Continue
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPersonalDetails;
