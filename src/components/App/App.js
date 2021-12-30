import React from "react";
import Task from "../Task/Task";
import "./App.css";

function App() {
  return (
    <div className="container">
      <a
        className="btn btn-outline-primary position-absolute"
        onClick={addTaskWindow}
      >
        +
      </a>
      <h1 className="display-4 text-center">Tasker</h1>
      <Task />
    </div>
  );
}

export default App;
