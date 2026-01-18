const express = require('express');
const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');

const app = express();

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);


module.exports = app;
