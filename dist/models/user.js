"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// export interface User {
//   id: number
//   name: string
//   email: string
//   password: string
// }
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    // id: String,
    name: String,
    email: String,
    password: String,
});
exports.default = mongoose_1.default.model('user', userSchema, 'users');
//# sourceMappingURL=user.js.map