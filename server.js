const express = require('express');
const mongoose = require('mongoose');

const app = express();

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Post = mongoose.model('Post', postSchema);

const connectionString = 'mongodb://localhost:37017/myDB';

mongoose.connect(connectionString);

const post = new Post({
    title: 'post-title',
    content: 'lorem ...'
});

post.save((err, savedDoc, affected) => {
    if (err) {
        console.log(err);
    }
    console.log(affected);
    console.log(savedDoc);
});

Post.find({}, (err, posts)=>{
    posts.forEach(post=> {
        console.log(`${post.title} -- ${post.content}`);
    })
});

app.listen(8080, () => console.log('app listening on port 8080'))