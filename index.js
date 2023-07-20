const express = require('express');
const mongoose = require('mongoose')
const Dotenv = require('dotenv')
const app = express();
const postRouter = require('./routes/posts')
Dotenv.config();

// Connection URL for MongoDB
mongoose.connect({/**Mangoos Url here */}, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });


// Import Routers
const authRoute = require('./routes/auth');


app.use(express.json());
// Route Middle
app.use('/api/user', authRoute);

app.use('api/posts', postRouter);

app.listen(3000, () => {
  console.log("Server Up and running!");
});
