import express from 'express';
import userRoutes from './routes/userRoute.js';
import first from './routes/first.js';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const app = express();
const PORT = 5000;

// db connect
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

connectDB();

// schema
// const blogSchema = new Schema({
//     title: String, // String is shorthand for {type: String}
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs: Number
//     }
//   });

app.use(express.json());
app.use('/api', userRoutes);
app.use('/', first);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
