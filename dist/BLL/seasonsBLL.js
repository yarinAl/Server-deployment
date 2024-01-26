"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeasonEpisodes = void 0;
const seasonsDAL_1 = require("../DAL/seasonsDAL");
const cache_1 = __importDefault(require("../cache/cache"));
const sanitizer_1 = require("../sanitizer");
const getSeasonEpisodes = (seasonId) => __awaiter(void 0, void 0, void 0, function* () {
    const getSeasonEpisodesCache = cache_1.default.get(`getSeasonEpisodes:${seasonId}`);
    if (getSeasonEpisodesCache) {
        return getSeasonEpisodesCache;
    }
    const SeasonEpisodesData = yield (0, seasonsDAL_1.getSeasonEpisodes)(seasonId);
    const res = SeasonEpisodesData.map((seasonEpisode) => convertApiEpisodeToEpisode(seasonEpisode));
    cache_1.default.set(`getSeasonEpisodes:'${seasonId}`, res);
    return res;
});
exports.getSeasonEpisodes = getSeasonEpisodes;
function convertApiEpisodeToEpisode(episode) {
    const summary = (0, sanitizer_1.sanitize)(episode.summary);
    const imageUrl = episode.image && episode.image.original
        ? episode.image.original
        : 'https://t.ly/2dSjj';
    return {
        id: episode.id,
        season: episode.season,
        number: episode.number,
        name: episode.name,
        image: imageUrl,
        summary: summary !== null && summary !== void 0 ? summary : '',
    };
}
//# sourceMappingURL=seasonsBLL.js.map