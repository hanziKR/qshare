"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const api = {
    setTitle: (title) => {
        console.log(title);
        electron_1.ipcRenderer.send("setTitle", title);
    }
};
electron_1.contextBridge.exposeInMainWorld("api", api);
