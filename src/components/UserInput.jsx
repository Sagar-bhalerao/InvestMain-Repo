import React, { useState } from "react";

export default function UserInput() {
  const [UserInput, SetUserInput] = useState({
    initialinvesment: 1000,
    annualinvestment: 1200,
    expectedReturn: 6,
    Duration: 10,
  });
  function HandalChange(inputIdentifire, Newvalue) {
    SetUserInput((PrevuserInput) => {
      return {
        ...+PrevuserInput,
        [inputIdentifire]: Newvalue,
      };
    });
    // console.log(inputIdentifire);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={UserInput.initialinvesment}
            onChange={(event) => {
              HandalChange(" initialinvesment", event.target.value);
            }}
            required
          />
        </p>
        <p>
          <label> Anual Invenstment</label>
          <input
            type="number"
            value={UserInput.annualinvestment}
            onChange={(event) => {
              HandalChange(" Annualinvestment", event.target.value);
            }}
            required
          />{" "}
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={UserInput.expectedReturn}
            onChange={(event) => {
              HandalChange(" ExpectedReturn", event.target.value);
            }}
            required
          />{" "}
        </p>
        <p>
          <label> Duration </label>
          <input
            type="number"
            value={UserInput.Duration}
            onChange={(event) => {
              HandalChange(" Duration", event.target.value);
            }}
            required
          />{" "}
        </p>
      </div>
    </section>
  );
}
