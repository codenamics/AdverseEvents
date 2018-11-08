import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Adverse Event Reporter" />
          <TextField
            hintText="First name"
            floatingLabelText="First name"
            onChange={handleChange("name")}
            defaultValue={values.name}
          />
          <TextField
            hintText="Last name"
            floatingLabelText="Last name"
            onChange={handleChange("lastname")}
            defaultValue={values.lastname}
          />
          <TextField
            hintText="Location"
            floatingLabelText="Location"
            onChange={handleChange("location")}
            defaultValue={values.location}
          />
          <TextField
            hintText="Phone"
            floatingLabelText="Phone"
            onChange={handleChange("phone")}
            defaultValue={values.phone}
          />
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
