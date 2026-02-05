import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  }
  catch(error)
  {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectDB();



app.get('/', (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});