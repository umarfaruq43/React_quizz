import React from "react";
import ReactDOM from "react-dom";
import { Introduction } from "./Introduction.js";
import { Preparation } from "./Preparation.js";
import { Header } from "./Header.js";
import { QuestionWraper } from "./Questions";
import { Remark } from "./Remark";

const Correction = () => {
  return (
    <div className="container">
      <h4 className="text-center">Review</h4>
      <CorrectionData />
    </div>
  );
};

const CorrectionData = () => {
  return (
    <div>
      <div>
        <div>
          <big> 1. </big>
          <span> What is the nme of your father?</span>
        </div>
        <div>
          {" "}
          Correct: <span>Umar Faruq</span>
        </div>
      </div>

      <div className="text-center mt-5">
        <button className='btn btn-success'>Start Again</button>
      </div>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Introduction />*/}
        {/*<Preparation /> */}
        {/* <QuestionWraper /> */}
        {/* <Remark /> */}
        <Correction />
      </div>
    );
  }
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
