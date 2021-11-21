import React, { useState } from "react";

import Button from "./components/Button";
import './App.css'
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";



function App() {
  const [input, setInput] = useState("")
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>X</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
        <ClearButton>Clear</ClearButton>
      </div>
    </div>

  );
}

export default App;
