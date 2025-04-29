import mongoose from "mongoose";

const { Schema } = mongoose;

const exampleSchema = new Schema({
  title: String,
  description: String, // ✅ درست
  price: Number,
  dicount: Number,
  rating: Number,
  brand: String,
  category: String,
});

const Example = mongoose.model("Example", exampleSchema);
export default Example;

