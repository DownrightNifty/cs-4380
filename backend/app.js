
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const PostModel = require('./Models/post');

mongoose.connect("mongodb+srv://server:1FzjhXJCPYfb2SJJ@recipeexchange.1y5gdq4.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to database');
})
.catch(() => {
  console.log("Database connection error");
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    //console.log('Middleware');
    next();
});

//console.log('what');

/* app.use('/api/posts', (req, res, next) => {
    //console.log('Hello please answer');
    const posts = [
        {
            id: "6546654",
            title:"Ratatouille",
            content:"This is the Ratatouille recipe"
        }
    ];

    res.status(200).json({
        message: "This is fetched data",
        posts: posts
    });
}); */

app.post("/api/posts", (req, res, next) => {
  const post = new PostModel({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  console.log(post);
  res.status(201).json({
    message:"Post added successful"
  });
});

app.get('/api/posts', (req, res, next) => {
  PostModel.find().then(documents => {
    res.status(200).json({
      message:"This is fetched data",
      posts: documents
    });
  });
});

module.exports = app;

