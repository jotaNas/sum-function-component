import React, { useState } from "react";
import Header from "./containers/Header";
import "./App.css";

const App = (props) => {
  const [number01, setNumber01] = useState(0);
  const [number02, setNumber02] = useState(0);
  const [total, setTotal] = useState(0);

  const handleTextChange = (e) => {
    setNumber01(e.target.value);
  };

  const handleTextLastChange = (e) => {
    setNumber02(e.target.value);
  };

  const handleSum = (num1, num2) => {
    num1 = Number(number01);
    num2 = Number(number02);
    setTotal(num1 + num2);
  };

  const { title } = props;

  return (
    <div className="example-sum">
      <Header title={title}></Header>
      <form>
        <input type="number" value={number01} onChange={handleTextChange} />

        <input type="number" value={number02} onChange={handleTextLastChange} />
        <br />
        <input className="btn" type="button" value="+" onClick={handleSum} />
      </form>

      <div className="preview">
        <div className="result">
          <h1>{total}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
