// import express framework which creates a web server easily in Node.js
const express = require('express');
// import Node.js build-in path module which helps build file path that runs on any OS 
const path = require('path');
// loads .env into process.env so file can now read PORT from .env file
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

// Middleware
// these three lines runs on every request, before routes handle it 
// let server read JSON data sent in request bodies ( liek from a fetch/API call)
app.use(express.json());
// let server read HTML form data (like when a <form> submits via POST)
app.use(express.urlencoded({ extended: true }));
// automatcally serves files from /public folder like css, images, js files without needing a route for each one
app.use(express.static('public'));

// when anyoen visits /, then it sends index.html, __dirname means the current folder server file lives in
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// when anyoen visits /login, then it sends login.html
app.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, "public/login.html"));
});

// listens for a POST request (form submission) at /loginwithcreds and pulls username and password out from the submitted data
app.post('/loginwithcreds', (req, res) => {
    const { username, password } = req.body;

    // Validation
    if (username.length <= 3 || password.length <= 5) {
        res.send("Username length must be greater than 3 & Password 5");
    } else if (username === "admin123" && password === "admin123") {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.listen(PORT, () => console.log(`App started on PORT:${PORT}`));