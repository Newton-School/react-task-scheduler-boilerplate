import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/App.css";

const Server = ({ id, data }) => {

  return (
    <div className="serverCard" id={id}>
      <div className="progress">
        <div className="progress-value">
          <span>
            Server {data.id}: {data.isIdle ? "Waiting" : "Working"}
          </span>
        </div>
      </div>
      <button
        className={`button ${!data.isIdle ? "disabled" : ""}`}
        id={`removeServer-${data.id}`}
      >
        Remove Server
      </button>
    </div>
  );
};

const TaskScheduler = () => {
  const [servers, setServers] = useState([
    {
      id: 1,
      isIdle: true,
      isWorking: false,
    },
  ]);
  const [taskCount, setTaskCount] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  //assign task to idle server

  //add a new server

  //add a new task

  return (
    <div>
      <h1>Task Scheduler</h1>
      <div className="formContainer">
        <form id="server-buttons" className="form">
          <input id="serverInput" type="number" name="servers" required />
          <button id="serverSubmit" type="submit">
            Add Servers
          </button>
        </form>
        <form id="task-buttons" className="form">
          <input id="taskInput" type="number" name="tasks" required />
          <button id="taskSubmit" type="submit">
            Add Tasks
          </button>
        </form>
      </div>
      <div id="taskStatus">
        <h3 id="remaining-tasks">Remaining Tasks: {pendingTasks}</h3>
        <h3 id="in-progress">In Progress: {taskCount - pendingTasks - completedTasks}</h3>
        <h3 id="completed-tasks">Completed Tasks: {completedTasks}</h3>
      </div>
      <hr />
      <div id="servers">
        {servers.map((server, index) => (
          <Server
            id={"server-" + server.id}
            key={index}
            data={server}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <TaskScheduler />
    </div>
  );
};

export default App;
