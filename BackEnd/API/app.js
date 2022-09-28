const express = require('express');

const app = express();

app.use(express.json());

// const cors = require('cors');

// app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/ping', (_req, res) => {
  return res.status(200).json(recipes);
});

// app.post('/ping', (_req, res) => {
//   recipes.push({ id: 4, name: 'Cebola', price: 10.0, waitTime: 30 });
//   res.status(200).json({ message: 'Cebola adicionada' });
// });

app.post('/recipes', (req, res) => {
  const { name, price, waitTime } = req.body;
  recipes.push({ id: Date.now(), name, price, waitTime });
  res.status(200).json({ message: `${ name } adicionado` });
});

app.all('*', (_req, res) => {
  return res.status(404).json({ message: 'Not Found' });
});

module.exports = app;