import mongoose from "mongoose";

export interface TodoInput {
  item: string
}

const todoItemSchema = new mongoose.Schema <any>(
  {
    item: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model<TodoInput>("todo", todoItemSchema);

export default Item;


