"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getElement_1 = __importDefault(require("./getElement"));
const title = (0, getElement_1.default)("title");
title.textContent = "hiii";
console.log("hellooooo!");
window.api.setTitle("hi!");
