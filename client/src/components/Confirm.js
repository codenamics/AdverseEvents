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
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Data" />
          <List>
            <ListItem primaryText="Name" secondaryText={name} />{" "}
            <h1>{errors.name}</h1>
            <ListItem primaryText="Last name" secondaryText={lastname} />{" "}
            <h1>{errors.lastname}</h1>
            <ListItem primaryText="Email" secondaryText={email} />{" "}
            <ListItem primaryText="Location" secondaryText={location} />{" "}
            <ListItem primaryText="Phone" secondaryText={phone} />{" "}
            <ListItem primaryText="Date" secondaryText={date} />{" "}
            <ListItem primaryText="Drug" secondaryText={drug} />{" "}
            <ListItem primaryText="Batch" secondaryText={batch} />{" "}
            <ListItem primaryText="Outcome" secondaryText={outcome} />{" "}
            <ListItem primaryText="Details" secondaryText={details} />{" "}
          </List>{" "}
          <RaisedButton label="Back" onClick={this.back} />{" "}
          <RaisedButton
            label="Confirm"
            primary={true}
            onClick={this.continue}
          />{" "}
        </React.Fragment>{" "}
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
