import express from 'express';
import userRoutes from './routes/userRoute.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
