import React from "react";

export const Remark = () => {
  return (
    <div>
      <h3 className="text-center">Score</h3>

      <h3 className="text-center">Remarks</h3>

      <p className="text-center">
        <span>
          Pass: <span className="text-success"> 10 </span>
        </span>
        <span>
          Fail: <span className="text-danger"> 10</span>
        </span>
      </p>
      <p className="text-center">
        <button className="btn btn-danger">See Correction</button>
      </p>
    </div>
  );
};
