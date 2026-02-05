import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './User.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());

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

//Create User
app.post('/cadastro', async (req, res) => {

  try {
    const novoUsuario = await User.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

});


//Get Users
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});