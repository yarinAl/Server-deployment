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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const showsBLL_1 = require("../BLL/showsBLL");
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shows = yield (0, showsBLL_1.getShows)(Number(req.query.count));
    res.send(shows);
}));
exports.router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shows = yield (0, showsBLL_1.getShow)(Number(req.params.id));
    res.send(shows);
}));
exports.router.get('/:id/seasons', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const seasons = yield (0, showsBLL_1.getShowSeasons)(Number(req.params.id));
    res.send(seasons);
}));
//# sourceMappingURL=showsRouter.js.map