const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/posts/:slug', function (req, res) {
    res.send(`${req.params.slug}`);
});


app.listen(8080, () => console.log('app listening on port 8080'))