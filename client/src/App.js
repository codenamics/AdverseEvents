import React, { Component } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Success from "./components/Success";
class App extends Component {
  // eslint-disable-next-line
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={UserForm} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
