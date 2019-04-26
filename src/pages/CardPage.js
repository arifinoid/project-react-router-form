import React, { Component } from "react";
import PageMenu from "../components/Menu";
import Card from "../components/Card";
// import NormalLoginForm from "./components/Login";

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
