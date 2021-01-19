import React, { useState } from "react";
const introStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Preparation = () => {
  const [userName, setuserName] = useState("");
  const handleInput = (e) => {
    setuserName(e.target.value);
  };
  return (
    <div className="container" >
      <h3 className="text-center pt-3 pb-5"> Rules/Guidelines</h3>
      <p className="border p-3 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        facilis quam libero nobis adipisci quae exercitationem perspiciatis
        dolorum? Non, vel vitae. Hic, architecto est quae iusto pariatur esse
        beatae sapiente?z
      </p>
      <form>
        <p className="container">
          <input
            className="form-control"
            type="text"
            value={userName}
            onChange={handleInput}
            placeholder="userName"
            required
          />
        </p>
        <p className="text-center">
          <button className="btn btn-success mt-4"> Start Quizz</button>
        </p>
      </form>
    </div>
  );
};
