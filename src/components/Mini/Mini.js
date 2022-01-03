import React from "react";
import reactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
let { useState } = React;
import Task from "../Task/Task";
import "./Mini.css";

function realTimeClock() {
  let date = new Date();
  let [hour, min, sec] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  return `${hour.toString().length == 1 ? "0" + hour : hour}:${
    min.toString().length == 1 ? "0" + min : min
  }:${sec.toString().length == 1 ? "0" + sec : sec}`;
}

function Mini() {
  let [getTime, setTime] = useState(realTimeClock());
  setInterval(() => {
    setTime(realTimeClock());
  }, 1000);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand container display-6 fs-6">
            Tasker {getTime}
          </span>
        </div>
      </nav>
      <div className="bg-dark">
        <Task isFor="mini" />
      </div>
    </div>
  );
}

reactDOM.render(<Mini />, document.getElementById("root"));
