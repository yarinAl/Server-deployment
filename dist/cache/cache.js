"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodeCache_1 = __importDefault(require("./nodeCache"));
const setCache = (key, value, { secondsUntilDestroyed = 1800 } = {}) => {
    nodeCache_1.default.set(key, value, secondsUntilDestroyed);
};
const getCache = (key) => {
    return nodeCache_1.default.get(key);
};
const cache = {
    set: setCache,
    get: getCache,
};
exports.default = cache;
//# sourceMappingURL=cache.js.map