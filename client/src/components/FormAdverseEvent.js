import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Adverse Event Reporter" />
          <TextField
            hintText="Date"
            floatingLabelText="Date"
            onChange={handleChange("date")}
            defaultValue={values.date}
          />{" "}
          <TextField
            hintText="Drug name"
            floatingLabelText="Drug name"
            onChange={handleChange("drug")}
            defaultValue={values.drug}
          />{" "}
          <TextField
            hintText="Batch number"
            floatingLabelText="Batch number"
            onChange={handleChange("batch")}
            defaultValue={values.batch}
          />{" "}
          <TextField
            hintText="Outcome"
            floatingLabelText="Outcome"
            onChange={handleChange("outcome")}
            defaultValue={values.outcome}
          />{" "}
          <TextField
            hintText="Details"
            floatingLabelText="Details"
            onChange={handleChange("details")}
            defaultValue={values.details}
          />
          <RaisedButton label="Back" primary={true} onClick={this.back} />{" "}
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />{" "}
        </React.Fragment>{" "}
      </MuiThemeProvider>
    );
  }
}

export default FormAdverseEvent;
