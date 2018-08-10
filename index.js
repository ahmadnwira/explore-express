const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express(); // get instance of express server

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
// app.verb('path', (request, response)=>{})
app.get('/', function (req, res) {
    res.json(data)
});

app.get('/posts/:slug', function (req, res) {
    res.send(`${req.params.slug}`);
});

// use static files middleware
app.use(express.static(path.join(__dirname, 'static')));

app.listen(8080, () => console.log('app listening on port 8080'))