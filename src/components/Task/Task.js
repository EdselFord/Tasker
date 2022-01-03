import React from "react";
import "./Task.css";

function Task(props) {
  return props.isFor == "mini" ? (
    <div className="container">
      {taskList.length !== 0 ? (
        <div className="list-group mt-3">
          <h6 className="lead fs-6">Current Task : </h6>
          <div className="list-group-item list-group-item-action latar-belakang-gelap">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 text-overflow-ellipsis">
                {taskList[0].task}
              </h5>
              <small>{taskList[0].time}</small>
            </div>
            <p className="mb-1 text-overflow-ellipsis">{taskList[0].desc}</p>
          </div>
        </div>
      ) : (
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1>Task Empty</h1>
        </div>
      )}
    </div>
  ) : (
    <div className="container">
      {taskList.length !== 0 ? (
        <div className="list-group">
          {taskList.map((element, index) => {
            return (
              <a
                href="#"
                className={
                  index === 0
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
                }
                key={element.id}
              >
                <div className="row">
                  <div className="position-relative">
                    <div className="position-absolute mt-3 start-10">
                      <a
                        className={
                          index === 0
                            ? "btn btn-outline-light"
                            : "btn btn-outline-primary"
                        }
                        id="tombol-checklist"
                        onClick={() => {
                          removeTask(element.id);
                        }}
                      >
                        ✓
                      </a>
                    </div>
                  </div>
                  <div className="col ms-5">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{element.task}</h5>
                      <small>{element.time}</small>
                    </div>
                    <p className="mb-1">{element.desc}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1>Task Empty</h1>
        </div>
      )}
    </div>
  );
}

export default Task;
