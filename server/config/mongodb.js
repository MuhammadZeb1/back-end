import mongoose from 'mongoose';
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
  
  export default connectDB;