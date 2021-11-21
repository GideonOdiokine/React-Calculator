import React, { useState } from "react";
import * as math from "mathjs";
import Button from "./components/Button";
import './App.css'
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
// import { evaluate } from 'mathjs'



function App() {
  const [input, setInput] = useState("")

  const addToInput = (val) => {
    setInput(input + val)
  }

  const handleEqual = () => {
    setInput(math.evaluate(input))
  }
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button addToInput={addToInput}>7</Button>
          <Button addToInput={addToInput}>8</Button>
          <Button addToInput={addToInput}>9</Button>
          <Button addToInput={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button addToInput={addToInput}>4</Button>
          <Button addToInput={addToInput}>5</Button>
          <Button addToInput={addToInput}>6</Button>
          <Button addToInput={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button addToInput={addToInput}>1</Button>
          <Button addToInput={addToInput}>2</Button>
          <Button addToInput={addToInput}>3</Button>
          <Button addToInput={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button addToInput={addToInput}>.</Button>
          <Button addToInput={addToInput}>0</Button>
          <Button addToInput={handleEqual} >=</Button>
          <Button addToInput={addToInput}>-</Button>
        </div>
        <ClearButton handleClear={() => setInput("")} >Clear</ClearButton>
      </div>
    </div>

  );
}

export default App;
