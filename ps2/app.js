const express = require('express');

const path = require('path');
const rootDir = require('./utils/pathUtil');
const app = express();

const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contactUs');

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);
app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})

const PORT = 3004;

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})