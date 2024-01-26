"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const episodesRouter_1 = require("./routers/episodesRouter");
const loginRouter_1 = require("./routers/loginRouter");
const registerRouter_1 = require("./routers/registerRouter");
const searchRouter_1 = require("./routers/searchRouter");
const seasonsRouter_1 = require("./routers/seasonsRouter");
const showsRouter_1 = require("./routers/showsRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static((0, path_1.join)(__dirname, 'ui/deploy')));
app.use('/home', () => {
    // get all shows
});
app.use('/watch/:id', () => {
    // get show
});
app.use('/shows', showsRouter_1.router);
app.use('/seasons', seasonsRouter_1.router);
app.use('/episodes', episodesRouter_1.router);
app.use('/search', searchRouter_1.router);
app.use('/login', loginRouter_1.router);
app.use('/register', registerRouter_1.router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=main.js.map