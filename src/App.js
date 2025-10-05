import React from "react";
import { LeetCodePractice, JavaScriptPractice } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="component-wrapper">
        <LeetCodePractice />
      </div>
      <div className="component-wrapper">
        <JavaScriptPractice />
      </div>
    </div>
  );
}

export default App;