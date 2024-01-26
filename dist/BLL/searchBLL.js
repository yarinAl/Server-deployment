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
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertApiShowToShowSearch = exports.getSearchResults = void 0;
const searchDAL_1 = require("../DAL/searchDAL");
const getSearchResults = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const searchShowsData = yield (0, searchDAL_1.searchShows)(search);
    const shows = searchShowsData
        .slice(0, 5)
        .map((searchShow) => convertApiShowToShowSearch(searchShow.show));
    return shows;
});
exports.getSearchResults = getSearchResults;
function convertApiShowToShowSearch(show) {
    var _a, _b, _c;
    return {
        id: show.id,
        name: show.name,
        image: (_b = (_a = show.image) === null || _a === void 0 ? void 0 : _a.original) !== null && _b !== void 0 ? _b : 'https://freesvg.org/img/1699712564Centaur2.png',
        language: show.language,
        premiered: show.premiered,
        rating: (_c = show.rating.average) !== null && _c !== void 0 ? _c : '--',
    };
}
exports.convertApiShowToShowSearch = convertApiShowToShowSearch;
//# sourceMappingURL=searchBLL.js.map