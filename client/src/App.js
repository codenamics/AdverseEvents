import React, { Component } from "react";
import "./App.css";
import UserForm from "./components/UserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="blue darken-1 mb-3">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">
              Adverse Event Reactive Forms
            </a>
          </div>
        </nav>{" "}
        <UserForm />
      </div>
    );
  }
}

export default App;
