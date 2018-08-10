const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); // get instance of express server

// view-engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'static'))); // use static files middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// app.verb('path', (request, response)=>{})
app.get('/', function (req, res) {
    res.render('home', {page: 'Home', data: data});
});

app.get('/posts', function (req, res) {
    res.render('newpost', {page: 'create post'});
});

app.post('/posts', function (req, res) {

    let new_data = data;
    const new_post = {title: req.body.title, content: req.body.content};

    new_data.push(new_post);
    fs.writeFile("./data.json", JSON.stringify(new_data));

    res.render('home', {page:'Home', data:new_data});
});

app.listen(8080, () => console.log('app listening on port 8080'))