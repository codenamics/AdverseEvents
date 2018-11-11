import React, { Component } from "react";
import "./App.css";
import UserForm from "./components/UserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="blue darken-1">
          <div className="nav-wrapper" />{" "}
        </nav>{" "}
        <UserForm />
      </div>
    );
  }
}

export default App;
