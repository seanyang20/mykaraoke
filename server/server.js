const express = require("express");
const app = express();
// const PORT = 8080;
const fs = require("fs");
const cors = require('cors');
const morgan = require('morgan');
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// Configuration
require('dotenv').config();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
// app.use(morgan('tiny'));

app.listen(port, () => {
    console.log(`Express server is up and running on Port ${port}!`);
  });