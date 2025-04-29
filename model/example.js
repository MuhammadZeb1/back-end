import mongoose from "mongoose";

const { Schema } = mongoose;

const exampleSchema = new Schema({
  title: String,
  decription: String,
  price:Number,
  dicount:Number,
  rating:Number,
  brand:String,
  category:String,
});

export const Example = mongoose.model("Example", exampleSchema);
