import React, { Component } from "react";
import "./App.css";
import PageMenu from "./components/Menu";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageMenu />
        <Card />
      </div>
    );
  }
}

export default App;
