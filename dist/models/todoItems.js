"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoItemSchema = new mongoose_1.default.Schema({
    item: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Item = mongoose_1.default.model("todo", todoItemSchema);
exports.default = Item;
