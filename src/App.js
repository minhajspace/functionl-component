import React, { useState } from "react";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1> Hello Every One </h1>
      <h2> i am {props.name}</h2>
      <h3>i lived in {props.city}</h3>
      <p>
        i have complete {props.course} from {props.college} in {props.branch}
        branch .
      </p>
      <p> i have completed my 12 th from {props.interschool} .</p>
    </div>
  );
};

export default App;
