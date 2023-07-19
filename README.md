# Node.js Authentication API
This repository contains a Node.js API that provides authentication functionality for use in various applications. The API utilizes JWT (JSON Web Tokens) for authentication and MongoDB as its database. It also incorporates Mongoose to create models and connect to the Express server, bcryptjs for password hashing, and jwt to secure private routes.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Tokens (JWT)

## Installation
1. Clone the repository to your local machine using <code>git clone</code> URL
2. Install the required dependencies: <code> npm install </code>
3. Set up the MongoDB connection:
```
Make sure you have MongoDB installed and running.
Edit the config.js file to specify your MongoDB connection URL.
```

## Usage
To start the server, use the following command:
<code> npm start </code>
<br>The server will be running at http://localhost:3000 by default. You can change the port by modifying the PORT constant in the index.js file.

## Endpoints
The following API endpoints are available:
```"copy"
<br> POST /api/auth/login
<br>POST /api/auth/register
<br>GET /api/private
```

Feel free to use, modify, and distribute this code as per the terms of the MIT License. However, please note that this project comes with no warranties. Use it at your own risk.

