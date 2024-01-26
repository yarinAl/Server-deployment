"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeasonEpisodes = void 0;
const apiCaller_1 = __importDefault(require("../apiCaller"));
const getSeasonEpisodes = (seasonId) => {
    return apiCaller_1.default.get(`https://api.tvmaze.com/seasons/${seasonId}/episodes`);
};
exports.getSeasonEpisodes = getSeasonEpisodes;
//# sourceMappingURL=seasonsDAL.js.map