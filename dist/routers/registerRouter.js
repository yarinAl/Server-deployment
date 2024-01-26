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
// const User = require('../models/user')
const jsonwebtoken_1 = require("jsonwebtoken");
const registerBLL_1 = require("../BLL/registerBLL");
exports.router = express_1.default.Router();
exports.router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registeredUser = yield (0, registerBLL_1.newUser)(req.body);
        let payload = { subject: registeredUser._id };
        let token = (0, jsonwebtoken_1.sign)(payload, 'secretKey');
        res.status(200).send({ token });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}));
//# sourceMappingURL=registerRouter.js.map