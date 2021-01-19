import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

const introStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const Introduction = () => {
  return (
    <div className="container text-center" style={introStyle}>
      <h1 className="py-2"> Wellcome</h1>
      <h2 className="py-5">to</h2>
      <h1 className="py-5"> REACT QUIZZ</h1>
      <button className="btn btn-info">Get Started</button>
    </div>
  );
};
