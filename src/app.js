const express = require('express');

// import routes
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.route');
const authRoutes = require('./routes/auth.route');

// middleware for hand
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth',  authRoutes);

app.use(errorHandler);


module.exports = app;
