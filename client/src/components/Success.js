import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
export default function Success() {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Adverse Event Sent" />
        <h1>Adverse Event Sent!</h1>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
