import { ipcRenderer, contextBridge } from "electron";


const api: Api = {
    setTitle: (title: string) => {
        console.log(title);
        ipcRenderer.send("setTitle", title);
    }
}
contextBridge.exposeInMainWorld(
    "api", api
);