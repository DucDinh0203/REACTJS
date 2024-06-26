const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const employeeRouter = require('./routes/employees');
app.use('/employees', employeeRouter);
app.get("/", (req, res, next) => {
  res.send("Hello, world!");
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
