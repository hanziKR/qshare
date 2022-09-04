import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

let window: BrowserWindow;

const createWindow = () => {
    window = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, "/preload.js")
        },
        show: false
    });

    window.loadFile("./dist/renderer/index.html");
    window.on("ready-to-show", () => window.show());
}

const handleSetTitle = (event: Electron.IpcMainEvent, title: string) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents) as Electron.BrowserWindow;
    win.setTitle(title);
    console.log(`[Set Title] ${title}`);
}

app.on("ready", () => {
    ipcMain.on("setTitle", handleSetTitle);
    createWindow();
});