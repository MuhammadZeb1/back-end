import express from 'express';
import userRoutes from './routes/userRoute.js';
import mongoose from 'mongoose';
import first from './routes/first.js';
import connectDB from './config/mongodb.js';
import cors from 'cors'
const { Schema } = mongoose;

const app = express();
const PORT = 5000;
connectDB()

app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);
app.use('/', first);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
