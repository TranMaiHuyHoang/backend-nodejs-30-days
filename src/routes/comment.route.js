const express = require('express');
const commentController = require('../controllers/comment.controller');
const commentValidator = require('../validations/comment.validation');
const authMiddleware = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const router = express.Router();

router.post(
    '/create',
    authMiddleware,
    commentValidator.createCommentValidator,
    validate,
    commentController.createComment
);

router.put('/updateCommentById/:comment_id', commentController.updateCommentById)

router.delete('/deleteCommentById/:comment_id', commentController.deleteCommentById)

router.get('/getCommentById/:comment_id', commentController.getCommentById)

// nhiều thằng con endpoint
module.exports = router;
