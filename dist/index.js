"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let window;
const createWindow = () => {
    window = new electron_1.BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            preload: path_1.default.join(__dirname, "/preload.js")
        },
        show: false
    });
    window.loadFile("./dist/renderer/index.html");
    window.on("ready-to-show", () => window.show());
};
const handleSetTitle = (event, title) => {
    const webContents = event.sender;
    const win = electron_1.BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
    console.log(`[Set Title] ${title}`);
};
electron_1.app.on("ready", () => {
    electron_1.ipcMain.on("setTitle", handleSetTitle);
    createWindow();
});
