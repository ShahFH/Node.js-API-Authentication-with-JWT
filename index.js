const express = require('express')
const app = express();

// import Routers
const authRoute = require('./routes/auth');


// Route Middlewares
app.use('./api/user', authRoute);

app.listen(300, () => console.log("Server Up and running"))