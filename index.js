const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

// Connection URL for MongoDB
MongoClient.connect("mongodb+srv://ShahLead:3e6e6u0V64qmbzyK@cluster0.4vb8zor.mongodb.net/test?retryWrites=true&w=majority", () => console.log("Connected to MongoDB"))


// Import Routers
const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log("Server Up and running on port 3000");
});
