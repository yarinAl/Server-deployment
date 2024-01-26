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
exports.convertApiShowToShow = exports.getShowSeasons = exports.getShow = exports.getShows = void 0;
const showsDAL_1 = require("../DAL/showsDAL");
const cache_1 = __importDefault(require("../cache/cache"));
const sanitizer_1 = require("../sanitizer");
const getShows = (count) => __awaiter(void 0, void 0, void 0, function* () {
    const getShowsCache = cache_1.default.get('getShows');
    if (getShowsCache) {
        return count ? getShowsCache.slice(0, count) : getShowsCache;
    }
    const showsData = yield (0, showsDAL_1.getShows)();
    const res = showsData.map((show) => convertApiShowToShow(show));
    cache_1.default.set('getShows', res);
    return count ? res.slice(0, count) : getShowsCache;
});
exports.getShows = getShows;
const getShow = (showId) => __awaiter(void 0, void 0, void 0, function* () {
    const getShowCache = cache_1.default.get(`getShow:${showId}`);
    if (getShowCache) {
        return getShowCache;
    }
    const showData = yield (0, showsDAL_1.getShow)(showId);
    const res = convertApiShowToShow(showData);
    cache_1.default.set('getShow', res);
    return res;
});
exports.getShow = getShow;
const getShowSeasons = (showId) => __awaiter(void 0, void 0, void 0, function* () {
    const getShowSeasonsCache = cache_1.default.get(`getShowSeasons:${showId}`);
    if (getShowSeasonsCache) {
        return getShowSeasonsCache;
    }
    const showSeasonsData = yield (0, showsDAL_1.getShowSeasons)(showId);
    const res = showSeasonsData.map((season) => convertApiSeasonToSeason(season));
    cache_1.default.set(`getShowSeasons:${showId}`, res);
    return res;
});
exports.getShowSeasons = getShowSeasons;
function convertApiShowToShow(show) {
    var _a, _b;
    const summary = (0, sanitizer_1.sanitize)(show.summary);
    return {
        id: show.id,
        name: show.name,
        image: (_b = (_a = show.image) === null || _a === void 0 ? void 0 : _a.original) !== null && _b !== void 0 ? _b : 'https://freesvg.org/img/1699712564Centaur2.png',
        summary: summary !== null && summary !== void 0 ? summary : '',
        seasons: [],
    };
}
exports.convertApiShowToShow = convertApiShowToShow;
function convertApiSeasonToSeason(season) {
    return {
        id: season.id,
        number: season.number,
        episodes: [],
    };
}
//# sourceMappingURL=showsBLL.js.map