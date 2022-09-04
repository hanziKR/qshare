"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getElement = (id) => {
    const element = document.getElementById(id);
    if (!element)
        throw new Error(`[getElement] ${id} not found`);
    return element;
};
exports.default = getElement;
