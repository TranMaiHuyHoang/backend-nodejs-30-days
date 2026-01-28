const { body } = require("express-validator");

class CommentValidator {
    // Add validation methods as needed
    createCommentValidator = [
        body("postId").notEmpty().withMessage("postId is required"),
        body("content").notEmpty().withMessage("content is required").isLength({ max: 2000 }).withMessage("content too long"),
    ];
}

module.exports = new CommentValidator();
