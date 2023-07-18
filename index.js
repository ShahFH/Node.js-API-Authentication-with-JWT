const express = require('express');
const { MongoClient } = require('mongodb');
const Dotenv = require('dotenv')
const app = express();

Dotenv.config();
// Connection URL for MongoDB
MongoClient.connect(process.env.MANGO_DB, () => console.log("Connected to MongoDB"))


// Import Routers
const authRoute = require('./routes/auth');


app.use(express.json());
// Route Middle
app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log("Server Up and running!");
});
