const express = require('express');

const app = express();

const data = [{
    title: 'post-title',
    content: 'lorem ipsum ...'
}, {
    title: 'post-title-again',
    content: 'lorem ipsum ...'
}];

const mongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb://localhost:37017/myDB';

mongoClient.connect(connectionString, (error, db) => {
    if (error) {
        console.log("didn't connect");
    };

    const dbo = db.db("myDB");

    const posts = dbo.collection('posts'); // creates collection
    posts.insert(data, (err, res) => {
        if (err) {
            console.log(err);
        }
    });

    dbo.collection('posts').find({}, (err, docs) => {
        docs.forEach(doc => {
            console.log(`Title => ${doc.title}, Content => ${doc.content}`);
        });
    });

    db.close();
});

app.listen(8080, () => console.log('app listening on port 8080'))