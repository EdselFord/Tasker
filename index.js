const { app, BrowserWindow, ipcMain } = require("electron");
const { readJSON, writeJSON } = require("json-reader-writer");

let mainWindow;
let addWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  mainWindow.on("closed", () => app.quit());
});

ipcMain.on("mainWindow:ready", () => {
  mainWindow.webContents.send("task:get", readJSON("list.json").data);
});

ipcMain.on("window:add", () => {
  addWindow = new BrowserWindow({
    width: 450,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  addWindow.loadURL(`file://${__dirname}/src/utils/addWindow.html`);
  addWindow.on("closed", () => (addWindow = null));
});

ipcMain.on("task:add", (event, data) => {
  let oldData = {};
  oldData = readJSON("list.json");
  try {
    let lastId = oldData.data[oldData.data.length - 1].id + 1;
    data.id = lastId;
  } catch (err) {
    data.id = 1;
  }
  oldData.data.push(data);

  writeJSON("list.json", oldData);
  addWindow.close();
  mainWindow.reload();
});

ipcMain.on("task:rm", (event, id) => {
  let data = readJSON("list.json").data;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      data.splice(i, 1);
      break;
    }
  }

  writeJSON("list.json", { data });
  mainWindow.reload();
});
