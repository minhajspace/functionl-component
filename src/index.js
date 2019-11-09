import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Index = props => {
  return (
    <div>
      <App
        name="Minhaj ahmad khan"
        city="Lucknow"
        course="B-tech"
        college="Dr.MC saxena college on engg and tech "
        interschool="Bright Carrer inter college Lucknow"
      />
      <App
        name="Urooj"
        city="Lucknow"
        course="B-tech"
        college="Dr.MC saxena college on engg and tech "
        interschool="Baby martin"
      />
      <App
        name="vishal"
        city="unnao"
        course="B-tech"
        college="Dr.MC saxena college on engg and tech "
        interschool="tkic"
      />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
