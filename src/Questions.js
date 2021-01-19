import React from "react";

const Questions = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>1</h1>
      </div>
      <form>
        <h4>What is the name of your Father?</h4>
        <div className="radio">
          <label>
            <input type="radio" name="que" className="mr-3" />
            <span>Umar</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="que" className="mr-3" />
            <span>Faruq</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="que" className="mr-3" />
            <span>Malik</span>
          </label>
        </div>
      </form>
      <div style={{ textAlign: "right" }}>
        <button className="btn btn-danger">
          {" "}
          Next <i className="fas fa-arrow-right"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export const QuestionWraper = () => {
  return (
    <div>
      <Questions />
    </div>
  );
};
