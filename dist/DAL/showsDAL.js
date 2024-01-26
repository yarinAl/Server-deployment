"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShowSeasons = exports.getShow = exports.getShows = void 0;
const apiCaller_1 = __importDefault(require("../apiCaller"));
const showsApi = 'https://api.tvmaze.com/shows';
const getShows = () => {
    return apiCaller_1.default.get(showsApi);
};
exports.getShows = getShows;
const getShow = (id) => {
    return apiCaller_1.default.get(`${showsApi}/${id}`);
};
exports.getShow = getShow;
const getShowSeasons = (id) => {
    return apiCaller_1.default.get(`${showsApi}/${id}/seasons`);
};
exports.getShowSeasons = getShowSeasons;
//# sourceMappingURL=showsDAL.js.map