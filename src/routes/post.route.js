const express = require('express');
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const authorizeRoles = require('../middlewares/authorize.middleware');
const router = express.Router();


router.post('/create', authMiddleware, authorizeRoles('admin'), postController.createPost);

router.get('/listPost', postController.getListPosts);

router.get('/getPostById/:post_id', postController.getPostById);

router.delete('/deletePostById/:post_id', postController.deletePostById)

router.put('/updatePostById/:post_id', postController.updatePostById)

router.get('/getPostByUserId', authMiddleware, postController.getPostByUserId)
module.exports = router;
