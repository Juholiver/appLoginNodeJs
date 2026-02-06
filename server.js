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

app.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Senha inválida' });
  }

  res.json({ message: 'Login OK', user });

});

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


//update Users
app.put('/usuarios/:id', async (req, res) => {
  try {
    const usuarioAtualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuarioAtualizado) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete User
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuarioDeletado = await User.findByIdAndDelete(req.params.id);
    if (!usuarioDeletado) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});