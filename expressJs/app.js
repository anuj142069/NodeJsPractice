const express = require('express');

const requestHandler = require('./user')

const app = express();

app.use('/', (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  res.send("<p>Came from first Middleware</p>")
  next();
});
app.use('/submit-details' ,(req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding NodeJs series</p>");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  
});