const { ipcRenderer } = require("electron");

ipcRenderer.send("mainWindow:ready");

const addTaskWindow = () => {
  ipcRenderer.send("window:add");
};

const removeTask = (id) => {
  ipcRenderer.send("task:rm", id);
};

let taskList;
ipcRenderer.on("task:get", (event, data) => {
  taskList = data;
});
