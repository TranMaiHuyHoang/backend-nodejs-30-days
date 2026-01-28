const commentService = require("../services/comment.service");

class CommentController {
    async createComment(req, res, next) {
        try {
            const { postId, content } = req.body;
            const { userId } = req.user;

            const result = await commentService.createComment({
                userId: userId, postId: postId, content: content
            });
            res.status(201).json({ message: "Comment successfully", data: result })
        } catch (e) {
            next(e);
        }
    }

    async updateCommentById(req, res, next) {
        try {
            const comment_id = req.params.comment_id;
            const updateData = req.body;
            const result = await commentService.updateCommentById(comment_id, updateData);
            res.status(200).json({ message: "Comment update successfully", data: result });
        } catch (error) {
            next(error)
        }
    }

    async deleteCommentById(req, res, next) {
        try {
            // const comment_id=req.params.comment_id
            const { comment_id } = req.params;
            const result = await commentService.deleteCommentById(comment_id);
            res.status(200).json({ message: "Comment delete successfully", data: result });
        } catch (error) {
            next(error)
        }
    }

    async getCommentById(req, res, next) {
        try {
            const { comment_id } = req.params;
            const result = await commentService.getCommentById(comment_id);
            res.status(200).json({ message: "Comment retrieved successfully", data: result });
        } catch (error) {
            next(error)
        }
    }
}


module.exports = new CommentController();
