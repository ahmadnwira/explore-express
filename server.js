const express = require('express');
const app = express(); // get instance of express server

const mongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb://localhost:37017/myDB';

mongoClient.connect(connectionString, (error, db) => {
    if (error) {console.log("didn't connect");};
    console.log('connected successfully');
    db.close();
});

app.listen(8080, () => console.log('app listening on port 8080'))