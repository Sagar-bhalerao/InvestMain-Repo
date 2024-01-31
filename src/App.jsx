import React, { useState } from "react";
import Header from "./components/Header";
import SetInput from "./components/SetInput";
import Resut from "./components/Result";
function App() {
  const [UserInput, SetUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function HandalChange(inputIdentifire, Newvalue) {
    SetUserInput((PrevuserInput) => {
      return {
        ...+PrevuserInput,
        [inputIdentifire]: +Newvalue,
      };
    });
    // console.log(inputIdentifire);
  }
  const isvalid = UserInput.duration >= 1;
  return (
    <>
      <Header />
      <SetInput UserInput={UserInput} onChange={HandalChange} />

      {isvalid ? <Resut input={UserInput} /> : <p>please select valid </p>}
    </>
  );
}

export default App;
