import mongoose from "mongoose";

const { Schema } = mongoose;

const exampleSchema = new Schema({
  name: String,
  roll: Number
});

export const Example = mongoose.model("Example", exampleSchema);
