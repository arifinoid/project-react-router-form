import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CardPage from "./pages/CardPage";
import Register from "./pages/Register";
import PageNotFound from "./pages/NotFound";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/card" component={CardPage} />
          <Route path="/register" component={Register} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
