import React, { Component } from "react";
import "../App.css";
import PageMenu from "../components/Menu";
import WrappedNormalLoginForm from "../components/Login";

class Home extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <PageMenu />
        <WrappedNormalLoginForm />
      </div>
    );
  }
}

export default Home;
