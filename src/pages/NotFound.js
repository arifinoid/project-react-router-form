import React from "react";
import Menu from "../components/Menu";

const PageNotFound = props => {
  const path = props.location.pathname;
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <Menu />
      <h1 style={{ fontFamily: "Concert One" }}>
        Look at what you have done, I have told you before
      </h1>
      <img
        src="https://cdn3.iconfinder.com/data/icons/web-hosting-7/66/61-512.png"
        alt="404NotFound"
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default PageNotFound;
