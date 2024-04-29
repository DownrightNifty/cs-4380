
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    //console.log('Middleware');
    next();
});

//console.log('what');

app.use('/api/posts', (req, res, next) => {
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
});

module.exports = app;

