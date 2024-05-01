import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results"
function App() {
  const [inputs, setInputs] = useState({
    "initialInvestment": 10000,
    "annualInvestment": 12000,
    "expectedReturn": 6,
    "duration": 10
  })
 
  function getUserInput(e) {
    setInputs(prevValue =>{
      return {
        ...prevValue,
        [e.target.name]: +e.target.value
      }
    })
  }

  const inputIsValid = inputs.duration >= 1

  return (
    <>
      <Header />
      <div className="input-group" id="user-input">
        <UserInput name="initialInvestment" label="initial investment" handleChange={getUserInput} value={inputs["initialInvestment"]}/>
        <UserInput name="annualInvestment" label="annual investment" handleChange={getUserInput} value={inputs["annualInvestment"]}/>
        <UserInput name="expectedReturn" label="expected return" handleChange={getUserInput} value={inputs["expectedReturn"]}/>
        <UserInput label="duration" name="duration" handleChange={getUserInput} value={inputs["duration"]}/>
      </div>
      {!inputIsValid && <p className="center">Please use positive value for duration</p>}
      {inputIsValid && <Results userInputs={inputs}/>}
    </>
  );
}

export default App;
