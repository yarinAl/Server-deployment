"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpisode = void 0;
const apiCaller_1 = __importDefault(require("../apiCaller"));
const getEpisode = (id) => {
    return apiCaller_1.default.get(`https://api.tvmaze.com/episodes/${id}`);
};
exports.getEpisode = getEpisode;
//# sourceMappingURL=episodesDAL.js.map