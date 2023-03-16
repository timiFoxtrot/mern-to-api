"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoItems_1 = __importDefault(require("../models/todoItems"));
const router = express_1.default.Router();
/* GET users listing. */
router.post("/item", async (req, res) => {
    try {
        const newItem = new todoItems_1.default({
            item: req.body.item,
        });
        await newItem.save();
        res.status(201).json({
            status: "success",
            item: newItem,
        });
    }
    catch (error) {
        res.json(error);
    }
});
router.get("/items", async (req, res) => {
    try {
        const items = await todoItems_1.default.find({});
        res.status(200).json({
            data: items.length,
            status: "success",
            items,
        });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
router.put("/item/:id", async (req, res) => {
    try {
        const updatedItem = await todoItems_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        console.log(updatedItem);
        res.status(200).json({
            status: "success",
            message: "Item updated",
        });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
router.delete("/item/:id", async (req, res) => {
    try {
        await todoItems_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Item deleted",
        });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.default = router;
