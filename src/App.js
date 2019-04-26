import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardPage from "./pages/CardPage";
import Register from "./pages/Register";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/card" component={CardPage} />
        <Route path="/register" component={Register} />
      </Router>
    );
  }
}

export default App;
