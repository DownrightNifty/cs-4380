
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const PostModel = require('./Models/post');

// make our db connection specifying the recipe-list collection
mongoose.connect("mongodb+srv://server:1FzjhXJCPYfb2SJJ@recipeexchange.1y5gdq4.mongodb.net/recipe-list?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to database');
})
.catch((err) => {
  console.log("Database connection error: "+err);
})

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

// executes when a recipe is being added to the db from the frontend
app.post("/api/posts", (req, res, next) => {
  console.log('saving a post');
  const post = new PostModel({
    id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message:"Post added successful"
  });
});

// executes when the frontend requests recipes from the db
app.get('/api/posts', (req, res, next) => {
  PostModel.find().then(documents => {
    res.status(200).json({
      message:"This is fetched data",
      posts: documents
    });
  });
});

module.exports = app;

