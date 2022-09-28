const bodyParser = require('body-parser');

const express = require('express');

const app = express();

// app.use(bodyParser.json());

// ou 

app.use(express.json());

const emailRegex = /\S+@\S+\.\S+/;

function validateUserRegister (req, res, next) {
  const { username, email, password } = req.body;

  if (!username.length > 3) return res.status(400).json({ message: "invalid data username"});

  if (!emailRegex.test(email)) return res.status(400).json({ message: "invalid data email" });
  if (password.length < 4) return res.status(400).json({ message: "invalid data pass" });
  if (password.length > 8) return res.status(400).json({ message: "invalid data pass" });
  if (typeof password !== 'number') return res.status(400).json({ message: "invalid data pass" });

  next();
}

function getToken (length) {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function validateUserLogin (req, res, next) {
  const { email, password } = req.body;
  
  if (!emailRegex.test(email)) return res.status(400).json({ message: "email or password is incorrect" });
  if (password.length < 4) return res.status(400).json({ message: "email or password is incorrect" });
  if (password.length > 8) return res.status(400).json({ message: "email or password is incorrect" });
  if (typeof password !== 'number') return res.status(400).json({ message: "email or password is incorrect" });
  
  next();
}


app.post('/user/register', validateUserRegister, (req, res) => {
  // const { username, email, password } = req.body;
  res.status(201).json({ message: "User created" });
});

app.post('/user/login', validateUserLogin, getToken, (req, res) => {
  // const { username, email, password } = req.body;

  res.status(200).json({ token:`${getToken(12)}` });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001...');
});