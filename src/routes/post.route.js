const express = require('express');
const postController = require('../controllers/post.controller');
const router = express.Router();

router.post('/create', postController.createPost);

router.get('/listPost', postController.getListPosts);

router.get('/getPostById/:post_id', postController.getPostById);

router.delete('/deletePostById/:post_id', postController.deletePostById)

router.put('/updatePostById/:post_id', postController.updatePostById)

module.exports = router;
