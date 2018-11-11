import React, { Component } from "react";

import "./App.css";
import UserForm from "./components/UserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div class="nav-wrapper" />{" "}
        </nav>{" "}
        <UserForm />
      </div>
    );
  }
}

export default App;
