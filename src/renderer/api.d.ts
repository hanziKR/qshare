import type { ContextBridgeApi } from "electron"

declare global {
    interface Api {
        setTitle: (title: string) => void;
    }
    interface Window {
        api: Api
    }
}