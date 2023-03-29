import express, { Request, Response, NextFunction } from "express";
import Item from "../models/todoItems";
const router = express.Router();

/* GET users listing. */
router.post("/item", async (req: Request, res: Response) => {
  try {
    const newItem = new Item({
      item: req.body.item,
    });

    await newItem.save();
    res.status(201).json({
      status: "success",
      item: newItem,
    });
  } catch (error) {
    res.json(error);
  }
});

router.get("/items", async (req: Request, res: Response) => {
  try {
    const items = await Item.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      data: items.length,
      status: "success",
      items,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/item/:id", async (req: Request, res: Response) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(updatedItem);
    res.status(200).json({
      status: "success",
      message: "Item updated",
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/item/:id", async (req: Request, res: Response) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Item deleted",
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
