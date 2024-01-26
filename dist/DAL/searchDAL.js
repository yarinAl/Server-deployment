"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchShows = void 0;
const apiCaller_1 = __importDefault(require("../apiCaller"));
const searchApi = 'https://api.tvmaze.com/search';
const searchShows = (search) => {
    return apiCaller_1.default.get(`${searchApi}/shows?q=${search}`);
};
exports.searchShows = searchShows;
//# sourceMappingURL=searchDAL.js.map